import hashlib
import json

PASSWORDS_FILEPATH = './passwords-1000.txt'
JSON_DST_PATH = './md5_json.txt'

with open(PASSWORDS_FILEPATH, 'rb') as f:
	passwords = f.read().splitlines()
md5_to_pass = {}

for password in passwords:
	md5_to_pass[hashlib.md5(password).hexdigest()] = password.decode("utf-8")

print(md5_to_pass)
with open(JSON_DST_PATH, 'w') as f:
	f.write(json.dumps(md5_to_pass))

# Then, replace
# , "(.*?)":
# , (\1):

