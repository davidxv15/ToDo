// Import statements
import React from 'react';
import "./TodoList.css";
import TodoItem from './TodoItem';

// Functional component
const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
