// Hub Endpoints
fetch("https://v2.parcelroblox.com/hub", {method: GET}, { headers: { "Authorization": "key" } })
	.then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/hub", {method: PATCH},  { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));


// Whitelist Endpoints
fetch("https://v2.parcelroblox.com/whitelist/check/:userid_type/:user_id?product_id=pqz85egy8kx06kqymd3zlht3ltvg", {method: GET}, { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/whitelist/assign", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));


fetch("https://v2.parcelroblox.com/whitelist/revoke", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/whitelist/transfer", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

// Product Endpoints
fetch("https://v2.parcelroblox.com/products/:product_id", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/products/create", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/products/delete", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));

fetch("https://v2.parcelroblox.com/products/update/ubir55lf2u0sxe3rnkul6hp5cysl", { headers: { "Authorization": "key" } })
    .then((response) => response.json())
	.then((data) => console.log(data));