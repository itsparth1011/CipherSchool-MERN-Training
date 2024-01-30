import React, { useState } from "react";


function AddtodoForm() {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setTitle(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-tittle"
        id="todo-title"
        placeholder="type here new todo"
        value={title}
        onChange={handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default AddtodoForm;
