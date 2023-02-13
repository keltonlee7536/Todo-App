let tasks = []

document.onkeydown = function (e) {
    let keydown = e.key;

    if(keydown == "Enter"){
        addTask()
    }else{}
  };


function render(){

    let text = "<ul>";
    tasks.forEach(myFunction);
    text += "</ul>";
    document.getElementById("displayList").innerHTML = text;
    
    function myFunction(value) {
      text += "<li>" + value + "</li>";
    } 
}

function menu(){
    //pop-up menu with options to add
    //new task
}

function addTask(){
    if (document.getElementById("newTaskInput").value != ""){

    let newTask = document.getElementById("newTaskInput").value
    tasks.push(newTask)
    document.getElementById("newTaskInput").value = "";
    render()

    }else{

    }
}

function complete(id){
    //document.getElementById(id).style.text-decoration: 'line-through';
    
    //strikethrough(taskId)
}

function removeTask(taskid){
    //removes a task
}