from flask import Flask, jsonify
import json
import threading
import time
import os
import signal

app = Flask(__name__)

# A function that shuts down the Flask server after a delay
def shutdown_server():
    time.sleep(300)  # 5 minutes = 300 seconds
    print("Shutting down the server after 5 minutes.")
    os.kill(os.getpid(), signal.SIGINT)  # Send interrupt signal to stop the Flask server

@app.route('/epochs', methods=['GET'])
def get_epochs():
    try:
        # Load the epoch data from the file
        with open('epochs_data.json', 'r') as f:
            data = json.load(f)
        return jsonify(data), 200
    except FileNotFoundError:
        return jsonify({"error": "Epoch data not found"}), 404

if __name__ == '__main__':
    # Start the background thread to shut down the server after 5 minutes
    shutdown_thread = threading.Thread(target=shutdown_server)
    shutdown_thread.daemon = True  # Ensures the thread stops when the main program exits
    shutdown_thread.start()

    app.run(host='0.0.0.0', port=5000)  # Exposing port 5000
