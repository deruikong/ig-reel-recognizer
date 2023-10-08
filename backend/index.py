from flask import Flask, request, jsonify
import shazamio, requests

app = Flask(__name__)
shazam = shazamio.Shazam()
@app.route('/', methods=['POST'])
async def index():
    print(request.json['media'])
    media = request.json['media']
    print("test")
    r = requests.get(media)
    open('test.mp4', 'wb').write(r.content)
    print(media)
    song = await shazam.recognize_song('test.mp4')
    print(song)
    return song