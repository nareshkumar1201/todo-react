import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { v1 as uuid } from "uuid";
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DISPLAY_TODOS,
  UPDATE_TODO,
} from "./types";

const TodoState = (props) => {
  const initialState = {
    todos: [
      {
        id: 1,
        todo: "Do Home work",
        completed: false,
      },
      {
        id: 2,
        todo: "Clean Room",
        completed: false,
      },
      {
        id: 3,
        todo: "Wash Car",
        completed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //add todo
  const addTodo = (todo) => {
    todo.id = uuid();
    console.log(todo);
    // todo.completed = false;
    dispatch({ type: ADD_TODO, payload: todo });
  };

  //display todo

  const displayTodos = () => {
    dispatch({ type: DISPLAY_TODOS, payload: state.todos });
  };

  //edit todo

  //delete todo

  const deleteTodo = (id) => {
    console.log("payload id", id);
    dispatch({ type: DELETE_TODO, payload: id });
  };

  //update todo

  const updateTodo = (id) => {
    console.log("in todoState", id);
    dispatch({ type: UPDATE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        displayTodos,
        deleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
