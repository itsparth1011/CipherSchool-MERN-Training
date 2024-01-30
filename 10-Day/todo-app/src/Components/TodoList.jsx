import React from "react";
import Todo from "./Todo";

function TodoList({ listTodos }) {
  return (
    <div>
      {listTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
