const lists = [
    {name:"listName", tasks:[{name: 'apples', completed:false}, {name: 'bananas', completed:false}]},
    {name:"listName-2", tasks:[ {name: 'milk', completed:false}, {name: 'cheese', completed:false}]}
]

function displayList(){
    document.getElementById('list-display').innerHTML = lists[0];
  }

function addList() {
    const newList = document.getElementById('addList').value;
    console.log(newList)
    lists.push(newList);
    document.getElementById('listName').innerHTML = lists.name;
    //render();
}
function removeList(){
    if (list.completed === true) {
    lists.remove();//replaces with undefined
    console.log(lists)
    }
}
function addTask() {
    const newTask = document.getElementById('addTask').value;
    console.log(newTask);
    if(newTask) {
    lists.push({
    name: newTask,
    completed: false
    })
    document.getElementById('displayList').innerHTML = lists;
    //render();
    }
}
function removeTask(){ //sudo
    /*if (lists.name.tasks.completed = true){
        delete lists.task
        console.log(lists)
        render()
        */
}
function completeTask(){ //sudo
    //if (completed): true;
        //strikethrough, move to bottom if list;
        //render()
}
function removeAllTasks(){ //sudo
    //change completed to true for currentlist
}
 function render() { //not sure what's going on here
    // this will hold the html that will be displayed in the sidebar
     let listsHtml = '<ul class="list-group">';
     // iterate through the lists to get their names
     lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.name}</li>`;
    });
   
    listsHtml += '</ul>';
    // print out the lists
    document.getElementById('displayLists').innerHTML = lists;
    //print out the name of the current list
   
    document.getElementById('listname').innerText = currentList.name;
    // iterate over the todos in the current list
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
    todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
}
function save() {
localStorage.setItem('currentList', JSON.stringify(currentList)); 
localStorage.setItem('lists', JSON.stringify(lists));
}
function getTasksHtml(tasks){
    let tasksHtml = "";
    for (let taskItem of tasks) {
        tasksHtml += `
            <input type="checkbox" ${taskItem.completed ? 'checked' : ''}" />
            <label>${taskItem.name}</label>
        `
    }
    return tasksHtml
}
function changeList(position) {
    if(position >= lists.length) {
        alert('Error')
        //make a new list?
    } else {
        displayList(lists[position])
    }
}
function displayList(listData){
    let name = listData.name;
    let tasks = listData.tasks;
    let tasksHtml = getTasksHtml(tasks);
    let listName = document.querySelector('.listName')
    let tasksElement = document.querySelector(".tasks")

    listName.textContent = name
    tasksElement.innerHTML = tasksHtml
}

function test() {
    toDoArray = ["function addList","function removeList","function addTask"]
    //console.log(toDoArray)
    //console.log(lists)
    console.log()
  }