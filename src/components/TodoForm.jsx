// Import statements
import React, { useState } from 'react';
import "./TodoForm.css"

// Functional component
const TodoForm = ({ addTodo }) => {
  // Declare state variables
  const [input, setInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        text: input,
        completed: false,
      });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
