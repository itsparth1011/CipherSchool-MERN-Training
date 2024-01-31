import React, { useState } from "react";
import styles from "./AddtodoForm.module.css";
import { ToastContainer, toast } from 'react-toastify';

function AddtodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle.trim().length === 0) {
      setTodoTitle("")
      toast("Cannot enter Empty string");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };

    addTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.todoinput}
        name="todo-title-input"
        id="todo-title-input"
        placeholder="Enter your task..."
        value={todoTitle}
        autoComplete="off"
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />

      <button type="submit" className={styles.todoButton}>
        Add
      </button>
    </form>
  );
}
//Form :
// Input
//submit event: grab input value, create new todo, add new todo to app state

export default AddtodoForm;
