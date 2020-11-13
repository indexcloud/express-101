const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

let orders = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// req, res

app.post("/order", (req, res) => {
	const order = req.body;

	res.send(order);
});

app.listen(port, () => {
	console.log("server started");
});
