import { useState } from "react"
export const ToDoItem = (props) => {
    console.log(props)
    const [newInput, setNewInput] = useState("")
    const [editing, setEditing] = useState(false)
    const [btnVisibility, setBtnVisibility] = useState(true)

    const newInputUpdate = (event) => {
        console.log(event.target.value)
        setNewInput(event.target.value)



    }


    const onUpdate = () => {
        setEditing(true)
        setBtnVisibility(false)

    }

    const onClickEdit = () => {
        if (/[a-zA-Z]/.test(newInput)) {
            props.onEdit(props.index, newInput);
            setEditing(false); setBtnVisibility(true);
        } else {
            setEditing(false);
            setBtnVisibility(true)
        }
        document.querySelector(".main-input").focus()
    }

    return (<div>
        <p className="title-item" >{props.value}</p>

        {editing && <div>
            <input type="text" autoFocus className="edit-input" onChange={newInputUpdate} />
            <button
                onClick={onClickEdit}
            >Submit</button>
        </div>}
        {btnVisibility && <button className="edit-btn" onClick={onUpdate}>Edit</button>}
        {btnVisibility && <button className="delete-btn" onClick={props.onDelete()}>Delete</button>}
    </div>)
}

