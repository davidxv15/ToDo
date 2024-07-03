// Import statements
import React from 'react';

// Functional component
const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
