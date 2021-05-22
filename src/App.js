import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {startingList} from './modules/starting-list.js';
import './App.css';
import { TaskButton } from './modules/task-button.js';

function App() {
  const [taskArray, setList] = useState(startingList);

  function TaskButton(props){
    return(
        <h2 
            className={props.taskInfo.checked ? "completed-task": "todo-task"}
            onClick={() => {
                console.log("test")
                let newTaskArray = [...taskArray]
                newTaskArray[props.taskIndex]['checked'] = !(taskArray[props.taskIndex]['checked']);
                setList(newTaskArray);
            }}
            >
            {props.taskInfo.taskName}
        </h2>
    )
}

  return (
    <div>
      <TaskButton taskInfo={taskArray[2]} taskIndex={2} setList={setList}/>
    </div>
  );
}




export default App;
