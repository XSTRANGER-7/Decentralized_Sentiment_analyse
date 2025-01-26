# Example of training loop
epochs_data = []

for epoch in range(1, 11):  # Just an example loop for 10 epochs
    # Your model training code here
    epoch_data = {
        "epoch": epoch,
        "accuracy": 0.85 + (epoch * 0.01),  # Example of accuracy that increases with each epoch
        "loss": 0.2 - (epoch * 0.01)  # Example of loss decreasing with each epoch
    }
    
    epochs_data.append(epoch_data)

# Instead of saving to a file, you can just print the data
for epoch_data in epochs_data:
    print(f"Epoch {epoch_data['epoch']}: Accuracy = {epoch_data['accuracy']}, Loss = {epoch_data['loss']}")
    
with open('epochs_data.json', 'w') as f:
    for epoch_data in epochs_data:
        f.write(f"Epoch {epoch_data['epoch']}: Accuracy = {epoch_data['accuracy']}, Loss = {epoch_data['loss']}\n")

print("Epoch data saved to epochs_data.json.")
