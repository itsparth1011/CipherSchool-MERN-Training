import React from "react";
import { useEffect } from "react";
import axios from "axios";

const endpoint = "http://localhost:8000/api/todos";

function Todos() {
  async function fetchTodos() {
    const  responses = await axios.get(endpoint)
    console.log(responses);
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  return;
  <div>Todos</div>;
}

export default Todos;
