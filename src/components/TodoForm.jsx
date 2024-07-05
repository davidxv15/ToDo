// Import statements
import React, { useState } from 'react';
import "./TodoForm.css"

// Functional component
const TodoForm = ({ addTodo }) => {
  // Declare state variables
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // All inputs and respective fields
      addTodo({
        text: input,
        completed: false,
        priority: priority,
        dueDate, dueDate,
      });
      // To reset form inputs
      setInput('');
      setPriority('Low');
      setDueDate('');
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
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
      className="dateNumbers"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
