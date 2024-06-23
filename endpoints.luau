local HttpService = game:GetService("HttpService")

local api_key = "pak_HXAB8wu2VQ7ezNoTrF"
local function requestEndpoint(url, method, object)
    local response = HttpService:RequestAsync({
        Url = url,
        Method = method,
        Headers = {
            ['Content-Type'] = 'application/json',
            ['Authorization'] = api_key,
        },
    
        Body = HttpService:JSONEncode({object})
    })

    return response
end


--// Hub Endpoints
local response = requestEndpoint("https://v2.parcelroblox.com/hub", "GET", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/hub", "PATCH", {object})
print(response)

--// Whitelist Endpoints
local response = requestEndpoint("https://v2.parcelroblox.com/whitelist/check/:userid_type/:user_id?product_id=pqz85egy8kx06kqymd3zlht3ltvg", "GET", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/whitelist/assign", "POST", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/whitelist/revoke", "DELETE", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/whitelist/transfer", "PATCH", {object})
print(response)


--// Product Endpoints
local response = requestEndpoint("https://v2.parcelroblox.com/products/:product_id", "GET", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/products/create", "POST", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/products/delete", "DELETE", {object})
print(response)

local response = requestEndpoint("https://v2.parcelroblox.com/products/update/ubir55lf2u0sxe3rnkul6hp5cysl", "PATCH", {object})
print(response)