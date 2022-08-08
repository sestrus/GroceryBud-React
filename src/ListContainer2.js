import { useState, useCallback } from "react"
import { ToDoItem } from "./ToDoItem";
export const ListContainer2 = () => {

    const [toDo, setToDo] = useState("");
    const onInputUpdate = (event) => {

        setToDo(event.target.value)

    }


    const [newToDo, setNewToDo] = useState([])
    const onSubmitArray = () => {
        if (/[a-zA-Z]/.test(toDo)) {
            const newToDoArray = [
                ...newToDo, toDo
            ]
            setNewToDo(newToDoArray)

        }
    }
    const onClickDelete = (index) => {
        newToDo.splice(index, 1)
        setNewToDo([...newToDo])

    }
    const onToDoItemUpdate = (index, content) => {
        newToDo[index] = content
        setNewToDo([...newToDo])
        console.log(newToDo)

    }

    return (
        <section className="list-section">
            <div className="input-div">
                <h1>To Do List</h1>
                <input type="text" className="main-input" onChange={onInputUpdate} />
                <button type="button" className="add-btn" onClick={onSubmitArray} >Add</button>
            </div>
            <div>
                {newToDo.map((toDo, index) => <ToDoItem value={toDo} key={index} index={index} onDelete={() => { return onClickDelete }} onEdit={onToDoItemUpdate} />)}
            </div>
            <div>
                <button className="clear-btn" onClick={() => { setNewToDo([]) }}>Clear</button>
            </div>
        </section >
    )
}