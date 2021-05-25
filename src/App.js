import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {startingList} from './modules/starting-list.js';
import './App.css';
import { footerData } from './modules/footer-data.js';
import { modalData } from './modules/modal-data.js';


function App() {
  const [taskArray, setList] = useState(startingList);
  const [modalOpen, setModalOpen] = useState(false);

  const checkTask = (indexOfTask) => {
    let newTaskArray = [...taskArray];
    newTaskArray[indexOfTask]['checked'] = !(taskArray[indexOfTask]['checked']);
    setList(newTaskArray);
  }

  const openModal = (modalPurpose) => {
    if(modalPurpose === 'sort'){
      // modalData
    }
    setModalOpen(!(modalOpen))
  }

  const Header = (props) => {
    return <header>
      <button onClick={() => openModal("sort")}>Sort List</button>
      <button onClick={() => openModal("add")}>Add to List</button>
      <button onClick={() => openModal("remove")}>Remove from List</button>
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
    return <div className="modal"></div>
  }

  return <div className="main-box">
    <Header />
    <TaskList taskArray={taskArray} />
    <Footer linkData={footerData} />
    {modalOpen && (
      <Modal modalContent={modalData}/>
    )}
    </div>;
}




export default App;
