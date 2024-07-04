
import http.client

conn = http.client.HTTPSConnection("tripadvisor16.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "d283acd8ebmsh86e67a15d2cd3dfp1ec54ajsn3ba92b3cff73",
    'x-rapidapi-host': "tripadvisor16.p.rapidapi.com"
}

conn.request("GET", "/api/v1/flights/searchAirport?query=london", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))