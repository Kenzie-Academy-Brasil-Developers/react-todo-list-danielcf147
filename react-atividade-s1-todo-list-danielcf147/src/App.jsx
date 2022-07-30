import { useState } from "react";
import "./App.css";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
  const [toDo, setToDo] = useState([]);

  function addToDo(newTodo) {
    if (newTodo[0] !== "") {
      setToDo((oldToDo) => [...oldToDo, newTodo]);
    }
  }

  function handleToDo(removeItem) {
    setToDo(toDo.filter((item) => item !== removeItem));
  }

  return (
    <div className="container">
      <Form addToDo={addToDo} toDo={toDo} />
      <ToDoList toDo={toDo} handleToDo={handleToDo} />
    </div>
  );
}

export default App;
