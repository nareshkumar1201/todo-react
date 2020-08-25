import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  // console.log(todo);

  const todoContext = useContext(TodoContext);
  const { deleteTodo, updateTodo } = todoContext;
  // const { id, todo, completed } = todo;

  const onChange = (e) => {
    console.log("todoItem: update req", todo.id);
    updateTodo(todo.id);
  };
  const onClick = () => {
    console.log("todoItem: delete req", todo.id);
    deleteTodo(todo.id);
  };

  return (
    <Fragment>
      <div className="container col-12 todo-item-container">
        <ul className="list-group w-100">
          <li className="list-group-item">
            <input
              type="checkbox"
              name="todo"
              // value={todo.todo}
              onChange={onChange}
            />
            <span className="text-info"> {todo.todo}</span>
            <button className="btn float-right ">
              <i
                className="fa fa-pencil-square-o text-info "
                aria-hidden="true"
              ></i>
            </button>
            <button className="btn float-right" onClick={onClick}>
              {" "}
              <i className="fa fa-trash text-info" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
