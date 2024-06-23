import requests


for i in range(0, float('inf')):
    response = requests.get('https://v2.parcelroblox.com/hub',  headers={"Authorization" : "prod_FltDPQBi3cCheGFdrfWJgK7uh"})
    print(i)
   
    print(f"Status Code: {response.status_code}")
    # print(response.json())
    