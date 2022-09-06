import { useState } from "react";
export const ToDoItem = (props) => {
  const [editInput, setEditInput] = useState("");
  const [editVisible, setEditVisible] = useState(true);

  const setEditInputFunction = (event) => {
    setEditInput(event.target.value);
  };

  const onClickEdit = () => {
    setEditVisible(!editVisible);
  };

  const onClickDelete = () => {
    let newArr = [...props.list];
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i] === props.value) {
        newArr.splice(i, 1);
      }
    }
    props.onValueChange(newArr);
    setEditVisible(true);
  };

  const onClickApply = () => {
    let newArr = [...props.list];
    newArr[props.myKey] = editInput;
    props.onValueChange(newArr);
    setEditVisible(!editVisible);
  };

  return (
    <div className="list-item" id={`list-id${props.myKey}`}>
      <p className="title-item">{props.value}</p>
      {editVisible ? (
        <button className="edit-btn" onClick={onClickEdit}>
          Edit
        </button>
      ) : (
        <div>
          <input type="text" onChange={setEditInputFunction} />{" "}
          <button onClick={onClickApply}>Apply</button>
        </div>
      )}

      <button className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
};
