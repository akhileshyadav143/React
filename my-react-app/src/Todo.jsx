import { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("key")) || [];
  });

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span>{todo}</span>

          <button onClick={() => editTodo(index)}>
            Edit
          </button>

          <button onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;