
FROM python:3.9-slim

# Install necessary tools and libraries
RUN apt-get update && apt-get install -y   wget gcc libpq-dev python3-dev   && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Download the dataset, model script, and requirements file from IPFS
# RUN wget https://ipfs.io/ipfs/bafkreiduqpybe26wfhpt236jbeyt6nykzyg37kfv4bs23g4pdiurjzqzbi -O dataset.py
RUN wget https://ipfs.io/ipfs/bafkreibdtan5kbs2ztg6dyizlzn7dbvy3zlz7qkcn5dbummhaitreji52m -O model.py
RUN wget https://ipfs.io/ipfs/bafkreigbjxygrvhvdldduhh3ehqsmue5x6mfuxs6oxjpwyvay6p2clrp4i -O requirements.txt

# Verify that requirements.txt is downloaded correctly
RUN cat requirements.txt

RUN pip install -r requirements.txt
Run pip install Flask Flask-Cors


RUN echo "from flask import Flask, jsonify" > /app/app.py &&     echo "import threading" >> /app/app.py &&     echo "import time" >> /app/app.py &&     echo "import os" >> /app/app.py &&     echo "import signal" >> /app/app.py &&     echo "from flask_cors import CORS" >> /app/app.py &&     echo "" >> /app/app.py &&     echo "app = Flask(__name__)" >> /app/app.py &&     echo "" >> /app/app.py &&     echo "CORS(app)" >> /app/app.py &&     echo "# A function that shuts down the Flask server after a delay" >> /app/app.py &&     echo "def shutdown_server():" >> /app/app.py &&     echo "    time.sleep(300)  # 5 minutes = 300 seconds" >> /app/app.py &&     echo "    print('Shutting down the server after 5 minutes.')" >> /app/app.py &&     echo "    os.kill(os.getpid(), signal.SIGINT)  # Send interrupt signal to stop the Flask server" >> /app/app.py &&     echo "" >> /app/app.py &&     echo "@app.route('/epochs', methods=['GET'])" >> /app/app.py &&     echo "def get_epochs():" >> /app/app.py &&     echo "    try:" >> /app/app.py &&     echo "        # Load the epoch data from the file" >> /app/app.py &&     echo "        with open('/app/epochs_data.json', 'r') as f:" >> /app/app.py &&     echo "            data = f.read()" >> /app/app.py &&     echo "        return jsonify({'epochs': data}), 200" >> /app/app.py &&     echo "    except FileNotFoundError:" >> /app/app.py &&     echo "        return jsonify({'error': 'Epoch data not found'}), 404" >> /app/app.py &&     echo "" >> /app/app.py &&     echo "if __name__ == '__main__':" >> /app/app.py &&     echo "    # Start the background thread to shut down the server after 5 minutes" >> /app/app.py &&     echo "    shutdown_thread = threading.Thread(target=shutdown_server)" >> /app/app.py &&     echo "    shutdown_thread.daemon = True  # Ensures the thread stops when the main program exits" >> /app/app.py &&     echo "    shutdown_thread.start()" >> /app/app.py &&     echo "" >> /app/app.py &&     echo "    app.run(host='0.0.0.0', port=5000)" >> /app/app.py

# Start both the model training script and the Flask app
CMD python model.py && python app.py

