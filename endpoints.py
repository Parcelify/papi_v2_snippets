import requests


# Hub Endpoints
response = requests.get('https://v2.parcelroblox.com/hub',  headers={"Authorization" : "key"})
print(response.json())

response = requests.patch('https://v2.parcelroblox.com/hub',  headers={"Authorization" : "key"})
print(response.json())

# Whitelist Endpoints 
response = requests.get('https://v2.parcelroblox.com/whitelist/check/:userid_type/:user_id?product_id=pqz85egy8kx06kqymd3zlht3ltvg',  headers={"Authorization" : "key"})
print(response.json())

response = requests.post('https://v2.parcelroblox.com/whitelist/assign',  headers={"Authorization" : "key"})
print(response.json())

response = requests.delete('https://v2.parcelroblox.com/whitelist/revoke',  headers={"Authorization" : "key"})
print(response.json())

response = requests.patch('https://v2.parcelroblox.com/whitelist/transfer',  headers={"Authorization" : "key"})
print(response.json())

# Product Endpoints
response = requests.get('https://v2.parcelroblox.com/products/:product_id',  headers={"Authorization" : "key"})
print(response.json())

response = requests.post('https://v2.parcelroblox.com/products/create',  headers={"Authorization" : "key"})
print(response.json())

response = requests.delete('https://v2.parcelroblox.com/products/delete',  headers={"Authorization" : "key"})
print(response.json())

response = requests.patch('https://v2.parcelroblox.com/products/update/ubir55lf2u0sxe3rnkul6hp5cysl',  headers={"Authorization" : "key"})
print(response.json())