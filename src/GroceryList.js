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
    } else {
      document.querySelector(".error-paragraph").innerHTML = "Wprowadz wartosc";
    }
  };

  return (
    <div className="grocery-container">
      <div className="grocery-input">
        <h1 id="main-header">Grocery List</h1>
        <p className="error-paragraph"></p>
        <input
          type="text"
          className="main-input"
          onChange={inputOnChange}
          autoFocus
        ></input>
        <button type="button" onClick={onClickBtn} className="add-btn">
          Add
        </button>
      </div>
      <div className="grocery-list">
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
    </div>
  );
};
