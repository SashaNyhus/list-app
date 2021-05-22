import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {startingList} from './modules/starting-list.js';
import './App.css';


function App() {
  const [taskArray, setList] = useState(startingList);

  const checkTask = (indexOfTask) => {
    let newTaskArray = [...taskArray];
    newTaskArray[indexOfTask]['checked'] = !(taskArray[indexOfTask]['checked']);
    setList(newTaskArray);
  }

  const TaskList = (props) => {
    let buttonArray = props.taskArray.map((taskObj, taskIndex) => {
      return <TaskButton taskInfo={taskObj} taskIndex={taskIndex}/>
    })
    return <div className="list-box">
      {buttonArray}
    </div>
  }

  const TaskButton = (props) => {
    return(
        <h2 
            className={props.taskInfo.checked ? "completed-task": "todo-task"}
            onClick={() => checkTask(props.taskIndex)}
            >
            {props.taskInfo.taskName}
        </h2>
    )
}

  return <div className="main-box">
    <TaskList taskArray={taskArray} />
      {/* <TaskButton taskInfo={taskArray[2]} taskIndex={2} setList={setList}/> */}
    </div>;
}




export default App;
