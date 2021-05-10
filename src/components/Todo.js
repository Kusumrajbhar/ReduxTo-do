import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/TodoAction";

const Todo = () => {
  const [input, setInput] = useState("");

  const list = useSelector((state) => state.todoReducer.list);
  console.log("state", list); //list having all id and data

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  console.log("set", input);
  return (
    <div>
      <figure>
        <figcaption>Add your List Here</figcaption>
      </figure>

      <div>
        <input
          type="text"
          name="input"
          placeholder="Add Items"
          value={input}
          onChange={changeHandler}
        />
        <button onClick={() => dispatch(addTodo(input), setInput(""))}>
          Add
        </button>
      </div>

      <div>
        {list.map((elem) => (
          <span key={elem.id}>
            <h3>
              {elem.data}
              <i
                className="far fa-trash-alt add-btn"
                onClick={() => dispatch(deleteTodo(elem.id))}
              ></i>
            </h3>
          </span>
        ))}
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(removeTodo())}>Remove All</button>
      </div>
    </div>
  );
};

export default Todo;
