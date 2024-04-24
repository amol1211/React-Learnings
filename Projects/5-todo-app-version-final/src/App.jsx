import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
