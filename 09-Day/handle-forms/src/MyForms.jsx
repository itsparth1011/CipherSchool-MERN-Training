import React from "react";
import { useState } from "react";

function MyForms() {
  const [username, setUserName] = useState(" ");
  function handleChange(e) {
    setUserName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default MyForms;
