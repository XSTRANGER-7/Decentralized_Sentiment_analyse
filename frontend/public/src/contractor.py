import subprocess

subprocess.run(['tar', '-czf', 'Prog.tar.gz', 'model.py', 'requirements.txt', 'dataset.csv'])

result = subprocess.run(['ipfs', 'add', "./Prog.tar.gz"], capture_output=True, text=True)

print(result.stdout.split(' ')[1])

# TODO: Send the hash to the API endpoint
