import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;
  console.log(todos);

  return todos.length > 0 ? (
    todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
  ) : (
    <p className="text-muted mx-2">Your Todo List is Empty ,Add Todos...</p>
  );
};

export default Todos;
