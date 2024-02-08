import React, { useState } from "react";
import { MdFileUploadOff } from "react-icons/md";

function EditTodo({ id, updateTitle, setUpdateMode, title: prevTitle }) {
  const [title, setTitle] = useState(prevTitle || "");

  function handleSubmit(e) {
    e.preventDefault();
    updateTitle(id, title);
    setUpdateMode(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Confirm</button>
    </form>
  );
}

export default EditTodo;
