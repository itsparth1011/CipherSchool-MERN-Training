const http = require("http");

const PORT = 8000;

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html " });

//     if (request.url === "/api/todos" && request.method === "GET") {
//         response.end('<h1 style="font-family: sans-serif; background: black; color: white;" >Hello World</h1>');
//     } else {
//         response.end("<h1>Error....</h1>");
//     }
// });

const todos = [
    {
        id: 1,
        title: "write code",
        completed: false
    },
    {
        id: 2,
        title: "Push on git",
        completed: false
    },
    {
        id: 3,
        title: "Linkedin Post",
        completed: false
    },
]

const server = http.createServer((req, res) => {

    if (req.url === "/api/todos" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(todos));
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json "
        });
        res.end(JSON.stringify({ message: "Not a valid method" }));
    }
});

// server render 
server.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});
