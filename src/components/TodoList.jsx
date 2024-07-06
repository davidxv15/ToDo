// components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// Functional component TodoList that maps over the list of todos and renders TodoItem for each todo
const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  console.log('Rendering TodoList with todos:', todos);
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          text={todo.text}
          completed={todo.completed}
          priority={todo.priority}
          dueDate={todo.dueDate}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
