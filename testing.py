import urllib2
import json

googl-news = '2cf1147f311d4755ae29190c6461aa55'

url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2cf1147f311d4755ae29190c6461aa55'
json_obj = urllib2.urlopen(url)

data = json.load(json_obj)


for item in data['articles']:
	print "item is :" + str(item) 