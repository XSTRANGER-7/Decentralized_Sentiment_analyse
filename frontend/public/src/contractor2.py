import subprocess
import argparse

parser=argparse.ArgumentParser(
    description="This is a contractor script"
)

parser.add_argument(
    '--hash', metavar='hash', type=str,
    help="The hash of the file to download",
    required=True
)

args=parser.parse_args()

subprocess.run(['ipfs', 'get', args.hash, '-o', 'output.tar.gz'])

subprocess.run(['tar', '-xf', '.\output.tar.gz', '-C', '.'])