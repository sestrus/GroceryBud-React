export const ToDoItem = (props) => {
    console.log(props)
    return (<div ><p>{props.value}</p><button>Delete</button></div>)
}
