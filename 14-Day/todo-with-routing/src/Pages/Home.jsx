import React, { useState } from "react";
import AddtodoForm from "../Components/AddtodoForm";
import TodoList from "../Components/TodoList";
import styles from "./Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Home({todos, setTodos}) {
  
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

export default Home;

//create a function in app
// that function will take newTodo as input
// then this function add newTodo to app state

// pass this function to addTodoForm via prop
// accept this function inside AddtodoForm

// onsubmit event
// create newtodo (already done)
// call that function (addTodo)
