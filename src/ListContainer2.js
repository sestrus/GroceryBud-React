import { useState } from "react"
import { ToDoItem } from "./ToDoItem";
export const ListContainer2 = () => {

    const [toDo, setToDo] = useState("");
    const onInputUpdate = (event) => {

        setToDo(event.target.value)

    }

    const [newToDo, newSetToDo] = useState([])
    const onSubmitArray = () => {
        const newToDoArray = [
            ...newToDo, toDo
        ]
        newSetToDo(newToDoArray)
    }

    return (
        <section className="list-section">
            <div className="input-div">
                <h1>To Do List</h1>
                <input type="text" className="main-input" onChange={onInputUpdate} />
                <button type="button" className="add-btn" onClick={onSubmitArray} >Add</button>
            </div>
            <div>
                {newToDo.map(toDo => <ToDoItem value={toDo} key={Math.random()} />)}
            </div>
        </section>
    )
}