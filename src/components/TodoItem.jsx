// components/TodoItem.jsx
import React from 'react';
// import './TodoItem.css'

// Functional component TodoItem that receives and displays various props
const TodoItem = ({ text, completed, index, priority, dueDate, removeTodo }) => {
  return (
    <li>
      {/* Display the todo text */}
      <span>{text}</span>

      {/* Display the completion status */}
      <span>{completed ? '✔️' : '❌'}</span>

      {/* Display the priority level */}
      <span>Priority: {priority}</span>

      {/* Display the due date */}
      <span>Due: {dueDate}</span>

      {/* Button to remove the todo item */}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
