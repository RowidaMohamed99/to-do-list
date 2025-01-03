const taskInput = document.getElementById("task");
const taskContainer = document.getElementById("taskContainer");


// let taskList = []
let taskList = JSON.parse(localStorage.getItem("data"))|| [] 
displayAllTasks()
function addTask(){
    let add = {
        task: taskInput.value,
    }
taskList.push(add);
localStorage.setItem("data", JSON.stringify (taskList));
displayTask(taskList.length-1);
taskInput.value = ""
}

function displayTask(index){
    let taskHTML = `
                    <div class="col-3 col-lg-6 col-sm-3 fw-bolder fs-5">
                        <p class="text-center">${taskList[index].task}</p>
                    </div>
                    <div class="col-3 col-lg-2 col-sm-3  fw-bold fs-6 text-center">
                        <input type="checkbox">
                    </div>
                    <div class="col-3 col-lg-2 col-sm-3 fw-bold fs-6 text-center">
                        <input type="checkbox">
                    </div>
                    <div class="col-3 col-lg-2 col-sm-3 fw-bold fs-6 text-center">
                        <i class="sign fa-solid fa-xmark text-danger" onClick="deleteTask(${index})"></i>
                    </div>
    `;
    taskContainer.innerHTML += taskHTML;
}
function displayAllTasks(){
    for(let i=0 ; i < taskList.length; i++){
        displayTask(i)
    }
}
function deleteTask(index){
    taskList.splice(index, 1)
    localStorage.getItem("data", JSON.stringify(taskList))
    taskContainer.innerHTML = "";
    displayAllTasks();
}