import React, { useState } from "react";
import styles from "./AddtodoForm.module.css";

function AddtodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };
    addTodo(newTodo);
    todoTitle(" ");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.todoinput}
        name="todo-title-input"
        id="todo-title-input"
        value={todoTitle}
        
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />

      <button type="submit" className={styles.todoButton}>Add</button>
    </form>
  );
}
//Form :
// Input
//submit event: grab input value, create new todo, add new todo to app state

export default AddtodoForm;
