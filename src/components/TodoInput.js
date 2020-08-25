import React, { Fragment, useState, useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";

const TodoInput = () => {
  const todoContext = useContext(TodoContext);
  const [todoInput, setTodo] = useState({
    todo: "",
    completed: false,
  });
  const { addTodo } = todoContext;
  const { todo, completed } = todoInput;

  // useEffect(() => {
  //   displayTodos();
  // }, []);
  const onChange = (e) => {
    setTodo({
      todo: e.target.value,
      completed: false,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit button clicked");
    if (todo !== "") {
      addTodo(todoInput);
      setTodo({
        todo: "",
        completed: false,
      });
    } else {
      alert("please enter todo");
    }
  };
  return (
    <Fragment>
      <div className="container">
        <form
          onSubmit={onSubmit}
          action="#!"
          className="d-flex flex-column justify-content-center"
        >
          <input
            type="text"
            className="form-control-md col-6 mx-auto my-2 p-1"
            placeholder="Enter Your todos..."
            onChange={onChange}
            value={todo}
            name="todo"
            required
          />
          <button className="btn btn-info col-6 my-2 mx-auto">Submit</button>
          {/*   <input
            type="button"
            className="btn btn-info col-6 my-2 mx-auto"
            value="SUBMIT"
          /> */}
        </form>
      </div>
    </Fragment>
  );
};

export default TodoInput;
