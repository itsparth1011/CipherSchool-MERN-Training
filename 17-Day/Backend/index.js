const express = require("express");

const app = express();

/*
{
    get: (req, res) => {}
    get, post, put, patch, delete
}
*/

app.get("/", (req, res) => {});

const port = 8000;

app.listen(port, () => {
    console.log(`App is running on port : ${port}`)
}) 