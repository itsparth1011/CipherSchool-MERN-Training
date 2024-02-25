import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  async function fethTodos() {
    const responses = await axios.get("http://localhost:8000/api/todos");
    const data = responses.data;
    setTodos(data);
  }
  useEffect(() => {
    fethTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return  <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
}

export default Home;
