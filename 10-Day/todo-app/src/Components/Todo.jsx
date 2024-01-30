import React from "react";

function Todo({ todo, deleteTodo, toggleCompleted}) {
  const todoStyle = {
    padding: "1rem",
    marginTop: "1rem",
    border: "2px solid red",
  };

  function handleDelete() {
    deleteTodo(todo.id);
  }

  function handleToggle(){
    toggleCompleted(todo.id);
  }


const titleStyle = {
  textDecoration : todo.completed && "line-through",
  opacity: todo.completed && "0.6",
}
  return (
    <div key={todo.id} style={todoStyle}>
      <p>id: {todo.id}</p>
      <p style={titleStyle}>title: {todo.title}</p>
      <p>Completed: {todo.completed ? "true" : "false"}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle completed</button>
    </div>
  );
}

export default Todo;
