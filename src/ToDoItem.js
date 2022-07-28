import { useState } from "react";
export const ToDoItem = (props) => {
  const [editInput, setEditInput] = useState("");
  const setEditInputFunction = (event) => {
    setEditInput(event.target.value);
    console.log(editInput);
  };

  const onClickEdit = () => {
    return (
      <div className="on-edit-btn-div">
        <input type="text" onChange={setEditInputFunction}></input>
      </div>
    );
  };

  const onClickDelete = () => {
    console.log("delete");
    document.getElementById(`list-id${props.myKey}`).remove();
  };

  return (
    <div className="list-item" id={`list-id${props.myKey}`}>
      <p className="title - item">{props.value}</p>
      <button className="edit-btn" onClick={onClickEdit}>
        Edit
      </button>{" "}
      <button className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
};
