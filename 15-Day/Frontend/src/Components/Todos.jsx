import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const endpoint = "/api/todos";

function Todos() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    
    try{
      const response = await axios.get(endpoint);
      setTodos(response.data);
    }catch(error){
      console.log(error)
    }

  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Todos;
