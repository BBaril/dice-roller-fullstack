import os
from flask import Flask, jsonify
from flask_cors import CORS         # this allows your frontend to access the backend
from dice_logic import roll_dice    # Import the function from the module

app = Flask(__name__)
CORS(app)           # Enable CORS for frontend communication

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Dice Roller API!"})  # Now returns JSON

@app.route('/roll', methods=['GET'])
def roll():
    return jsonify({'result': roll_dice()})     # Use the dice logic function

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))    # Dynamically use Render's port
    app.run(host='0.0.0.0',port=port)           # app.py
