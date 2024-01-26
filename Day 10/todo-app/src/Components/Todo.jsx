import React from "react";

function Todo({ todo }) {
  const todoStyle = {
    padding: "1rem",
    marginTop: "1rem",
    border: "2px solid red",
  };
  
  return (
    <div key={todo.id} style={todoStyle}>
      <p>id: {todo.id}</p>
      <p>title: {todo.title}</p>
      <p>Completed: {todo.completed ? "true" : "false"}</p>
    </div>
  );
}

export default Todo;
