import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");  // Clear input after submission
  };

  return (
    <form className="todo-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
      />
      <button className="add-task-button" type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
