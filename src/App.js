// Import statements: Here we import React and hooks (useState, useEffect) from 'react', and components from their respective files.
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

// Main App component: This is the root component that ties all other components together.
const App = () => {
  // State declaration: We use the useState hook to create a state variable 'todos' with an initial empty array and a function 'setTodos' to update it.
  const [todos, setTodos] = useState([]);

  // useEffect hook: This hook runs once after the initial render to load todos from localStorage (if any).
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    console.log('Retrieved storedTodos from localStorage:', storedTodos); 
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      console.log('Parsed storedTodos:', parsedTodos); 
      setTodos(parsedTodos); // If there are todos in localStorage, update the state with them.
      console.log('State after setting todos:', parsedTodos);
    }
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount in class components.

  // useEffect hook: This hook runs every time the 'todos' state changes to save the current todos to localStorage.
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    console.log('Saving todos to localStorage:', todosString); // Debugging log
    localStorage.setItem('todos', todosString);
  }, [todos]); // Dependency array with 'todos' means this effect runs whenever 'todos' changes.

  // Function to add a new todo: Takes a todo object as a parameter and updates the state with the new list of todos.
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    console.log('Adding new todo:', newTodos); // Debugging log
    setTodos(newTodos); // Add the new todo to the existing list of todos.
  };

  // Function to remove a todo: Takes the index of the todo to be removed and updates the state with the filtered list of todos.
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log('State after removing todo:', newTodos); // Debugging log
    setTodos(newTodos); // Remove the todo at the given index.
  };

  // Function to toggle the 'completed' status of a todo item: Takes the index of the todo to be toggled.
  // Creates a copy of the current todos array using the spread operator to avoid direct state mutation.
  // Flips the 'completed' status of the specified todo item by accessing it via its index and updating the 'completed' property.
  // Updates the state with the new array of todos using the setTodos function.
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    console.log('State after toggling todo:', newTodos); // Debugging log
    setTodos(newTodos);
  };

  // JSX to render the component: This is what will be rendered to the DOM.
  return (
    <div className="app">
      {/* Header component: Displays the header of the app. */}
      <Header />
      {/* TodoForm component: Handles the creation of new todos. */}
      <TodoForm addTodo={addTodo} />
      {/* TodoList component: Displays the list of todos and passes down the removeTodo function. */}
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      {/* Footer component: Displays the footer of the app. */}
      <Footer />
    </div>
  );
};

// Export the App component as the default export: This allows it to be imported in other files.
export default App;

