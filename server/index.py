from flask import Flask, render_template, request
from flask_cors import CORS
import os
 
app = Flask(__name__, static_folder='outputs')
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/")
def hello():
    return "Hello World!"
 
@app.route('/api', methods = ['GET', 'POST'])
def upload_file():
    image = request.files['uploadFile']
    image.save(os.path.join('./server/outputs',image.filename))

    
    return {'data':'success'}



if __name__ == '__main__':
    app.run(debug = True, host = '127.0.0.1', port = 3001)