import requests
import sqlite3

class PriceTracker:

	def __init__(self,coins):
		self.coins = coins
		self.connection = sqlite3.connect("cryptoBase.db")
		self.cursor = connection.cursor()
		sql_command = """
		CREATE TABLE pricing {
		
		}"""

	def getPrice(self,coin):
		xd = "https://min-api.cryptocompare.com/data/price?fsym=%s&tsyms=USD" % (coin)
		r = requests.get(xd)
		print(r.text.Response)
		print(r.text)


