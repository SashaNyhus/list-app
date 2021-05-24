import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {startingList} from './modules/starting-list.js';
import './App.css';
import { footerData } from './modules/footer-data.js';


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
        <div className="task-button" onClick={() => checkTask(props.taskIndex)}>
          <div className={props.taskInfo.checked ? "checked-box": "unchecked-box"} />
          <h2 className={props.taskInfo.checked ? "completed-task": "todo-task"}>
            {props.taskInfo.taskName}
          </h2>
        </div>
    )
}

const Footer = (props) => {
  return <footer>
    <a href={props.linkData.linkURL}>{props.linkData.linkText}</a>
  </footer>
}

  return <div className="main-box">
    <TaskList taskArray={taskArray} />
    <Footer linkData={footerData[0]} />
    </div>;
}




export default App;
