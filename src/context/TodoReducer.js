import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DISPLAY_TODOS,
  UPDATE_TODO,
} from "./types";
// import todoContext from "./TodoContext";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DISPLAY_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todoObj) => todoObj.id !== action.payload),
      };
    case UPDATE_TODO:
      console.log("in reducer :", action.payload);
      return {
        ...state,
        todos: state.todos.map((todoObj) => {
          if (todoObj.id === action.payload) {
            todoObj.completed = !todoObj.completed;
          }
          return todoObj;
        }),
      };
    default:
      return state;
  }
};

export default TodoReducer;
