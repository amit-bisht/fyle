from flask import Flask,jsonify
import requests
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/user/<userid>",methods=["GET"])
def userInfo(userid):
    print("user info executed")
    url="https://api.github.com/users/"+userid
    headers={
        'Authorization':'Bearer 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'
    }
    responseAPI=requests.get(url,headers=headers)
    data=json.loads(responseAPI.text)
    return data

@app.route("/repos/<userid>",methods=["GET"])
def hello_world(userid):
    print("user repos executed")
    headers={
        'Authorization':'Bearer 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'
    }
    url="https://api.github.com/users/"+userid+"/repos?per_page=4"
    responseAPI=requests.get(url,headers=headers)
    data=json.loads(responseAPI.text)
    return data

if(__name__=='__main__'):
    app.run(debug=True)