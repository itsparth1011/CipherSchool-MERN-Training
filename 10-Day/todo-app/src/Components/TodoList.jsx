import React from "react";
import Todo from "./Todo";

function TodoList({ listTodos, deleteTodo, toggleCompleted}) {
  return (
    <div>
      {listTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo = {deleteTodo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
