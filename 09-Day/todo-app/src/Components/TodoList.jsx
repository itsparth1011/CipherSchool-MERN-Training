import React from "react";
import Todo from "./Todo";

function TodoList({ todosProps }) {
  return (
    <div className="todo-list">
      {todosProps.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              border: "2px solid black",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <p>{todo.title}</p>
            <p>{todo.completed ? "completed" : "not completed"}</p>
            <button>Delete Todo</button>
            <button>Toggle Completed</button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
