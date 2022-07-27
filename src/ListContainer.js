import { useState } from "react"
import { ToDoItem } from "./ToDoItem"
export const ListContainer = () => {
    const [newToDo, setNewToDo] = useState("Example Todo")
    const onUpdateInput = (event) => {
        setNewToDo(event.target.value)
    }

    const [toDos, setNewToDos] = useState([])

    const onSubmitNewToDo = () => {
        const newToDos = [
            ...toDos, newToDo
        ]
        setNewToDos(newToDos)
    }

    return (
        <section className="ListContainer">
            <div className="input-div">
                <h1 id="main-header">To Do List</h1>
                <input type="text" className="main-input" onChange={onUpdateInput}
                // value={newToDo} 
                />
                <button type="button" className="add-btn" onClick={onSubmitNewToDo}>Add</button>
            </div>
            <div>
                {toDos.map(toDo => <ToDoItem key={Math.random()} value={toDo} />)}
            </div>
            {/* <div class="list-div">
                <div class="div-item">
                    <p id="item-title">Item Title</p>
                    <button type="text" class="edit-btn">Edit</button>
                    <button type="text" class="delete-btn">Delete</button>
                </div>
            </div> */}
        </section>
    )
}