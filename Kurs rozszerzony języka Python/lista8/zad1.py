import asyncio
import aiohttp
from aiohttp import ClientSession
from prywatne import API_KEY,LOCATION_KEY

async def fetch_page(session,url):
    params = {}
    async with session.get(url,params = params) as result:
        res = await result.text()
        return res

async def main():
    url1 = f'http://dataservice.accuweather.com/forecasts/v1/daily/1day/{LOCATION_KEY}?apikey={API_KEY}'
    url2 = 'https://jsonplaceholder.typicode.com/todos/1'
    async with aiohttp.ClientSession() as session:
        request1 = fetch_page(session, url1)
        request2 = fetch_page(session,url2)
        page1 = await asyncio.gather(request1)
        page2 = await asyncio.gather(request2)
        print(page1)
        print(page2)
asyncio.run(main())
