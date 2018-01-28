import flask
import scraper

app = flask.Flask(__name__)


@app.route('/getstuff')
def update_sentiments():
    #return scraper.startUp()
    return scraper.startUp()

