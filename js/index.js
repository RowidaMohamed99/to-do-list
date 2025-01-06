const taskInput = document.getElementById("task");
const taskContainer = document.getElementById("taskContainer");
const add = document.getElementById("add");
const update = document.getElementById("update");

let updateIndex;
// let taskList = []
let taskList = JSON.parse(localStorage.getItem("data"))|| [] 
displayAllTasks()
function addTask(){
    if(taskInput.value == "")return
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
                        <input type="checkbox"
                        onClick="getTask(${index})">
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
    localStorage.setItem("data", JSON.stringify(taskList))
    taskContainer.innerHTML = "";
    displayAllTasks();
}
function getTask(index){
    updateIndex = index;
    taskInput.value = taskList[index].task;
    add.classList.add("d-none")
    update.classList.remove("d-none")
}
function updateTask(){
    taskList[updateIndex].task = taskInput.value;
    localStorage.setItem("data", JSON.stringify(taskList))
    taskContainer.innerHTML= "";
    displayAllTasks();
    add.classList.remove("d-none")
    update.classList.add("d-none")
    taskInput.value = ""
}