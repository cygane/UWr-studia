import html.parser
import urllib.request
import re
import threading
import queue

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

def fetch_url(url, result_queue):
    try:
        req = urllib.request.urlopen(url)
        html_page = req.read().decode('utf-8')
        result_queue.put((url, html_page))
    except Exception as e:
        result_queue.put((url, str(e)))

def crawl(start_page, distance, action):
    visited = set()
    toVisit = [(start_page, 0)] 
    parser = Crawler()
    result_queue = queue.Queue()

    while len(toVisit) != 0:
        if toVisit[0][1] > distance: 
            break

        url, _ = toVisit[0]
        thread = threading.Thread(target=fetch_url, args=(url, result_queue))
        thread.start()
        thread.join()

        url, html_page = result_queue.get()
        parser.feed(html_page)
        yield url, action(html_page)

        visited.add(toVisit[0][0])
        toVisit.extend((url, toVisit[0][1] + 1) for url in parser.refSet - visited)
        toVisit = toVisit[1:]


for url, wynik in crawl("http://www.ii.uni.wroc.pl", 2,
                           lambda tekst : 'Python' in tekst):
       print(f"{url}: {wynik}")

