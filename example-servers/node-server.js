const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	// Extract the url path from the request

	// An example of object destructuring
	const {url} = req;
	// Non-fancy way
	// const url = req.url;
	console.log(`The URL path is: ${url}`);

	// Start working with our routes
	if (url === "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Hello World");
	} else if (url === "/favicon.ico") {
		res.statusCode = 200;
		res.end("");
	} else {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("This is not the home page");
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
