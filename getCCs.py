import requests
from bs4 import BeautifulSoup

r = requests.get('https://coinmarketcap.com/all/views/all/')
soup = BeautifulSoup(r.text, 'html.parser')


for text in soup.find_all('tr'):
	print(text)