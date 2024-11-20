// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // State for tasks
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Workshop', completed: false },
    { id: 2, text: 'Lunch', completed: false },
    { id: 3, text: 'Dinner', completed: false },
  ]);

  // Add new task
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo(''); // Clear input field after adding
    }
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>

      <div className="input-section">
        <input
          type="text"
          id="newTodo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button id="addTodo" onClick={addTodo}>Add</button>
      </div>

      <ul id="todoList">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span>{todo.text}</span>
            <button
              style={{ marginLeft: 'auto' }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;







