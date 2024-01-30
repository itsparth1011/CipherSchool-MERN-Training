import React, { useState } from "react";
import AddtodoForm from "./Components/AddtodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Learn React",
      comleted: false,
    },
    {
      id: "2",
      title: "Solve 1 DSA question",
      comleted: false,
    },
    {
      id: "3",
      title: "Revise React Concepts",
      comleted: false,
    },
]);

  return (
    <div className="App">
      <AddtodoForm />
      <TodoList todosProps={todos} />
    </div>
  );
}

export default App;
