// components/TodoItem.jsx
import React from "react";
import "./TodoItem.css";

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
  console.log("Rendering TodoItem:", { text, completed, priority, dueDate });
  return (
    <li>
      {/* Display the todo text */}
      <span className="task-text" style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>

      {/* Display the completion status */}
      <span className="completion-status">{completed ? "✔️" : "❌"}</span>

      {/* Display the priority level */}
      <span className="priority">
        Priority:{" "}
        <span className={priority === "High" ? "high-priority" : 
        priority === 'Medium' ? 'med-priority' : ""}>
          {priority}
        </span>
      </span>

      {/* Display the due date */}
      <span className="due-date" style={{ whiteSpace: "nowrap"}} >Due: {dueDate}</span>

      <span className="actions">
      <button
        style={{ backgroundColor: "rgb(122, 12, 23)" }}
        onClick={() => toggleComplete(index)}
      >
        {completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>

      {/* Button to remove the todo item */}
      <button onClick={() => removeTodo(index)}>Remove</button>
      </span>
    </li>
  );
};

export default TodoItem;
