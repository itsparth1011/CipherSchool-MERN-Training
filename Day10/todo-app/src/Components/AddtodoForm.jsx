import React, { useState } from "react";

function AddtodoForm() {
  const [todoTitle, setTodoTitle] = useState(" ");
  function handleSubmit(e) {
    console.log("hello");
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-title-input"
        id="todo-title-input"
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
//Form :
// Input
//submit event: grab input value, create new todo, add new todo to app state

export default AddtodoForm;
