function menu(){
    //pop-up menu with options to add
    //new task
    //new list
}

function complete(id){
    document.getElementById(id).setAttribute('style','text-decoration:line-through;')
}

function removeTask(taskid){

        for (let i = 0; i < tasks.length; i++) {
            
            if (i == taskid){
                //remove
            }else{
                //add 1 to currentElement;
          }
    }

}

function render(){

    let text = "<ul>";
    tasks.forEach(myFunction);
    text += "</ul>";
    document.getElementById("displayList").innerHTML = text;
    
    function myFunction(value) {
      text += "<li>" + value + "<input type=checkbox></input>" + "</li>";
    } 
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

document.onkeydown = function (e) {
    let keydown = e.key;
    if(keydown == "Enter"){
        addTask()
    }else{}
    render()
}

let tasks = []