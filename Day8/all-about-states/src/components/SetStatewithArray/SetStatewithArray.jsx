import React, { useState } from "react";

function SetStatewithArray() {
  const [tasks, setTasks] = useState(["task A", "task B", "task C"]);

  function handleAdd() {
    const newArray = [...tasks, "newTasks"];
    setTasks(newArray);
  }

  return (
    <div>
      <h1>useState with Array</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add TAsk</button>
    </div>
  );
}

export default SetStatewithArray;
