import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task) {
      setTodos([...todos, { task, completed: false }]);
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
