// import {changeList} from './change-list.js'

export function TaskButton(props){
    console.log(props)
    console.log(props.taskInfo.checked)
    return(
        <h2 
            className={props.taskInfo.checked ? "completed-task": "todo-task"}
            onClick={() => {
                console.log("test")
                let newTaskArray = props.taskArray;
                newTaskArray[props.taskIndex]['checked'] = !(props.taskArray[props.taskIndex]['checked']);
                props.setList(newTaskArray);
            }}
            >
            {props.taskInfo.taskName}
        </h2>
    )
}


function checkTask(indexOfTask, taskArray, setList){
    let newTaskArray = taskArray;
    newTaskArray[indexOfTask].checked = !(taskArray[indexOfTask].checked);
    setList(newTaskArray);
    console.log(taskArray)
}

function test() {
    console.log("This is a test")
}