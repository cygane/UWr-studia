import html.parser
import urllib.request
import re

class Crawler(html.parser.HTMLParser):
    def __init__(self):
        html.parser.HTMLParser.__init__(self)
        self.refSet = set()

    def handle_starttag(self, tag, attrs):
        if tag == 'a': 
            for (atribute, val) in attrs:
                if atribute == 'href': 
                    if re.match(r'https?://([a-zA-Z]+\.)*[a-zA-Z]+', val):
                        self.refSet.add(val)

def crawl(start_page, distance, action):
    visited = set()
    toVisit = [(start_page, 0)] 
    parser = Crawler()

    while len(toVisit) != 0:
        if toVisit[0][1] > distance: 
            break
        try:
            req = urllib.request.urlopen(toVisit[0][0])
        except EnvironmentError as e:
            print(toVisit[0][0], e)
        else:
            htmlPage = req.read().decode('utf-8')
            parser.feed(htmlPage) 
            yield (toVisit[0][0], action(htmlPage))
        finally:
            visited.add(toVisit[0][0]) 
            toVisit.extend((url, toVisit[0][1]+1) for url in parser.refSet - visited) 
            toVisit = toVisit[1:] 

for url, wynik in crawl("http://www.ii.uni.wroc.pl", 2,
                           lambda tekst : 'Python' in tekst):
       print(f"{url}: {wynik}")

