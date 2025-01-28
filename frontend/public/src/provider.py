import subprocess
import argparse

parser=argparse.ArgumentParser(
    description="This is a provider script"
)

parser.add_argument(
    '--hash', metavar='hash', type=str,
    help="The hash of the file to download",
    required=True
)

args=parser.parse_args()

subprocess.run(['ipfs', 'get', args.hash, '-o', 'Prog.tar.gz'])

subprocess.run(['tar', '-xf', '.\Prog.tar.gz', '-C', '.'])

subprocess.run(['pip', 'install', '-r', 'requirements.txt'])

subprocess.run(['python', 'model.py'])

subprocess.run(['pip', 'uninstall', '-r', 'requirements.txt', '-y'])

subprocess.run(['tar', '-czf', 'output.tar.gz', 'output'])

result =subprocess.run(['ipfs', 'add', './output.tar.gz'], capture_output=True, text=True)

print(result.stdout.split(' ')[1])

# TODO: Send the hash to the API endpoint