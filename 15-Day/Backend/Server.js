const http = require("http");

const PORT = 8000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html " });

    if (request.url === "/api/todos" && request.method === "GET") {
        response.end('<h1 style="" >Hello World</h1>');
    } else {
        response.end("<h1>Error....</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});
