function changeList(functionToUse, taskParam, taskArray){
    switch (functionToUse) {
        case 'checkTask':
            checkTask(taskParam, taskArray);
            break;
        default:
            break;
    }
    return;
}

function checkTask(indexOfTask, taskArray){
    taskArray[indexOfTask].checked = !(taskArray[indexOfTask].checked)
}