import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const GroceryList = () => {
  const [toDo, setToDo] = useState("");
  const [toDoElement, setToDoElement] = useState([]);
  let getKey;

  const inputOnChange = (event) => {
    setToDo(event.target.value);
  };

  const onClickBtn = () => {
    if (toDo !== "") {
      const toDoStorage = [...toDoElement, toDo];
      setToDoElement(toDoStorage);
      getKey = Math.random();
      document.querySelector(".main-input").value = "";
      setToDo("");
      document.querySelector(".main-input").focus();
    }
  };

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Item</label>
        <div className="ui action input">
          <input
            type="text"
            className="main-input"
            onChange={inputOnChange}
            autoFocus
          ></input>
          <button type="button" onClick={onClickBtn} className="ui button">
            Add
          </button>
        </div>
      </div>

      {toDoElement.map((newToDo, getKey) => (
        <ToDoItem
          key={getKey}
          myKey={getKey}
          value={newToDo}
          onValueChange={setToDoElement}
          list={toDoElement}
        />
      ))}
    </div>
  );
};
