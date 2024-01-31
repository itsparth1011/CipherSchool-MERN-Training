import React, { useState } from "react";
import { MdFileUploadOff } from "react-icons/md";

function EditTodo() {
  const [title, setTitle] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Confirm</button>
    </form>
  );
}

export default EditTodo;
