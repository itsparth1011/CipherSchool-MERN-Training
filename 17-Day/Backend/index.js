const express = require("express");
const fs = require("fs")
const todos = require("./db.json")
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

/*
{
    get: (req, res) => {}
    get, post, put, patch, delete
}
cycle of req and res:_

//browser/ postman can send request

//express can react request
//express can send response

// browser  and postman can read response

*/

app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ message: "Hello from sever" })
});

// get all todos:
app.get("/api/todos", (req, res) => {
    res.json(todos)
})

// Get single todo:
app.get("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(400).json({ message: `No todo presnt with id ${id}` })
    }
})

//create todo
app.post("/api/todos", (req, res) => {
    if (!("title" in req.body)) {
        res.status(500).json({ message: "Internal server error" })
    } else if (!("completed" in req.body)) {
        res.status(500).json({ message: "Internal server error" })
    } else {
        const id = todos.length + 1;
        const newTodo = {
            id: id.toString(),
            title: req.body.title,
            completed: req.body.completed
        }
        todos.push(newTodo);
        fs.writeFile("db.json", JSON.stringify(todos), "utf-8", (err) => {
            if (err) {
                res.status(500).json({ message: "Internal server error" })
            } else {
                res.status(200).json(newTodo)
            }
        })
    }
})


// Update todo

app.patch("/api/todos/:id", (req, res) => {
    const id = req.params.id
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        const newTodo = {
            ...todo, title: "title" in req.body ? req.body.title : todo.title,
            completed: "completed" in req.body ? req.body.completed : todo.completed
        }
        const updatedTodo = todos.map((todo) => {
            if (todo.id === id) {
                return newTodo
            } else {
                return todo
            }

        })
        fs.writeFile("db.json", JSON.stringify(updatedTodo), "utf-8", (err) => {
            if (err) {
                res.status(500).json({ message: "Internal server error" })
            } else {
                res.status(200).json(newTodo)
            }
        })

    } else {
        res.status(404).json({ message: `Todo not found with ${id}` })
    }
})


// Delete todo
app.delete("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        const updateTodos = todos.filter(todo => todo.id !== id);
        fs.writeFile("db.json", JSON.stringify(updateTodos), "utf-8", (err) => {
            if (err) {
                res.status(500).json({ message: "Internal server error" })
            } else {
                res.status(200).json({ message: `todo deleted with id ${id}` })
            }
        })
    } else {
        res.status(404).json({ message: `todo not found with  id: ${id}` })
    }
})



app.listen(port, () => {
    console.log(`App is running on port : ${port}`)
}) 