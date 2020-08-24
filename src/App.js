import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoState from "./context/TodoState";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <TodoState>
        <Header />
        <TodoInput />
        <div className="container todo-container col-6 my-3 p-1 overflow-auto">
          <Todos />
        </div>
      </TodoState>
    </div>
  );
}

export default App;
