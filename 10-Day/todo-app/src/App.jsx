import React, { useState } from "react";
import AddtodoForm from "./Components/AddtodoForm";
import TodoList from "./Components/TodoList";
import styles from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const todoList = [
  {
    id: "1",
    title: "Complete Task A",
    completed: false,
  },
  {
    id: "2",
    title: "Read Book",
    completed: false,
  },
  {
    id: "3",
    title: "Write Code",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      })
    );
  }

  function updateTitle(id, title) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        } else {
          return { ...todo };
        }
      })
    );
  }

  return (
    <>
      <ToastContainer />
      <div className={styles.App}>
        <h1 className={styles.heading}>Todo Appliation</h1>
        <AddtodoForm addTodo={addTodo} />
        <TodoList
          listTodos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          updateTitle={updateTitle}
        />
        {todos.length > 0 ? (
          <button
            className={styles.clearAll}
            onClick={() => {
              setTodos([]);
            }}
          >
            Clear All Todos
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;

//create a function in app
// that function will take newTodo as input
// then this function add newTodo to app state

// pass this function to addTodoForm via prop
// accept this function inside AddtodoForm

// onsubmit event
// create newtodo (already done)
// call that function (addTodo)
