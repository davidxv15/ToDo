// components/TodoItem.jsx
import React from "react";
// import './TodoItem.css'

// Functional component TodoItem that receives and displays various props
const TodoItem = ({
  text,
  completed,
  index,
  priority,
  dueDate,
  removeTodo,
  toggleComplete,
}) => {
  console.log('Rendering TodoItem:', { text, completed, priority, dueDate }); 
  return (
    <li>
      {/* Display the todo text */}
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>

      {/* Display the completion status */}
      <span>{completed ? "✔️" : "❌"}</span>

      {/* Display the priority level */}
      <span>Priority: {priority}</span>

      {/* Display the due date */}
      <span>Due: {dueDate}</span>

      <button style={{ backgroundColor: "black" }} onClick={() => toggleComplete(index)}>
        {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>

      {/* Button to remove the todo item */}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
