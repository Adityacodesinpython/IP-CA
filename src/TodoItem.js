import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span
        className="todo-task"
        onClick={() => completeTodo(index)}
      >
        {todo.task}
      </span>
      <button className="delete-task-button" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
