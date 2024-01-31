import React, { useState } from "react";
import styles from "./Todo.module.css";
import { MdDeleteForever } from "react-icons/md";
import EditTodo from "./EditTodo";

function Todo({ todo, deleteTodo, toggleCompleted }) {

  const [isUpdateMode, setUpdateMode] = useState(false);
  function handleDelete() {
    deleteTodo(todo.id);
  }

  function handleToggle() {
    toggleCompleted(todo.id);
  }
  if(isUpdateMode){
    return <EditTodo />;
  }

  return (
    <div className={styles.todo}>
      <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>

      <div className={styles.buttonContainer}>
        <button onClick={() => setUpdateMode(!isUpdateMode)}>Update</button>
        <input
          type="checkbox"
          name="todo-checkbox"
          id="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.todoCheckbox}
        />
        {/* <button onClick={handleToggle} className={styles.button}>
          Toggle
        </button> */}
        <button onClick={handleDelete} className={styles.button}>
        <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default Todo;
