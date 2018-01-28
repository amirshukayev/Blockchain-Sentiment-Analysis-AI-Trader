import flask
import scraper
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

@app.route('/getstuff')
def update_sentiments():
    #return scraper.startUp()
    return flask.jsonify(scraper.startUp())

