import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {startingList} from './modules/starting-list.js';
import './App.css';
import { footerData } from './modules/footer-data.js';
import { modalData } from './modules/modal-data.js';


function App() {
  const [taskArray, setList] = useState(startingList);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskType, setNewTaskType] = useState("");

  

  const checkTask = (indexOfTask) => {
    let newTaskArray = [...taskArray];
    newTaskArray[indexOfTask]['checked'] = !(taskArray[indexOfTask]['checked']);
    setList(newTaskArray);
  }

  const addNewTask = () => {
    let newTaskArray = [...taskArray];
    newTaskArray.push({
      "taskName": newTaskName,
      "TaskType": newTaskType,
      "checked": false,
      "show": true
    })
    setList(newTaskArray);
  }
  const openModal = (modalPurpose) => {
    modalData[modalPurpose] = true;
    setModalOpen(true)
  }

  const closeModal = () => {
    modalData.sort = false;
    modalData.add = false;
    modalData.delete = false;
    setModalOpen(false)
  }

  const toggleTasks = (type) => {
    let newTaskArray = [...taskArray];
    newTaskArray.map(taskObj => {
      if(taskObj.TaskType === type){
        taskObj.show = !(taskObj.show)
      }
    })
    setList(newTaskArray)
    modalData.sort = false;
    setModalOpen(false);
  }

  const Header = (props) => {
    return <header>
      <button onClick={() => (modalOpen ? closeModal(): openModal("sort"))}>Sort Tasks</button>
      <button onClick={() => (modalOpen ? closeModal(): openModal("add"))}>Add Tasks</button>
      <button onClick={() => (modalOpen ? closeModal(): openModal("delete"))}>Delete Tasks</button>
    </header>
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
        <div className={`task-button ${props.taskInfo.show ? "": "hidden-task"}`} onClick={() => checkTask(props.taskIndex)}>
          <div className={props.taskInfo.checked ? "checked-box": "unchecked-box"} />
          <h2 className={props.taskInfo.checked ? "completed-task": "todo-task"}>
            {props.taskInfo.taskName}
          </h2>
        </div>
    )
}

  const Footer = (props) => {
  let footerLinkArray = props.linkData;
  return <footer>
    {footerLinkArray.map(linkObj => (<a href={linkObj.linkURL}>{linkObj.linkText}</a>))}
  </footer>
}

  const Modal = (props) => {
    return <div className="modal">
      {props.modalData.sort && (
        <div className="modal-content">
          <p>Sort Tasks</p>
          <button onClick={() => (toggleTasks("planet"))}>Show/Hide Planets to Visit</button>
          <button onClick={() => (toggleTasks("companion"))}>Show/Hide Companions to Talk To</button>
          <button onClick={() => (toggleTasks("misc"))}>Show/Hide Misc Tasks</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      )}
      {props.modalData.add && (
        <div className="modal-content">
          <h3>Task Name:</h3>
          <input id="name" onChange={event => setNewTaskName(event.target.value)}/>
          <h3>Task Type:</h3>
          <select id="type" onChange={event => setNewTaskType(event.target.value)}>
            <option value="planet">Planet to Visit </option>
            <option value="companion">Companions </option>
            <option value="misc">Misc </option>
          </select>
          <button onClick={addNewTask}>Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      )}
    </div>
  }

  return <div className="main-box">
    <Header />
    <TaskList taskArray={taskArray} />
    <Footer linkData={footerData} />
    {modalOpen && (
      <Modal modalData={modalData}/>
    )}
    </div>;
}




export default App;
