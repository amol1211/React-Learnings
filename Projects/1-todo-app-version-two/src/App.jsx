import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/03/2023",
    },
    {
      name: "Go To College",
      dueDate: "12/03/2023",
    },
    {
      name: "Let Me Study",
      dueDate: "Right Now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
