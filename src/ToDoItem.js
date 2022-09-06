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
    if (editInput !== "") {
      let newArr = [...props.list];
      newArr[props.myKey] = editInput;
      props.onValueChange(newArr);
      setEditVisible(!editVisible);
    }
  };

  return (
    <div className="ui segment" id={`list-id${props.myKey}`}>
      <p
        onClick={onClickEdit}
        className=" left floated "
        style={{
          color: "#black",
          fontFamily: "Arial",
          fontSize: "25px",
          fontWeight: "50",
          textAlign: "center",
          backgroundColor: "#E8E8E8",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {props.value}
      </p>
      <div className="ui item">
        {editVisible ? (
          <button className="ui button" onClick={onClickEdit}>
            Edit
          </button>
        ) : (
          <div className="ui action input right floated">
            <input
              type="text"
              placeholder={props.value}
              autoFocus
              onChange={setEditInputFunction}
            />{" "}
            <button className="ui button" onClick={onClickApply}>
              Apply
            </button>
          </div>
        )}
        <button className="ui right floated button" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
