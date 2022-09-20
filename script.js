//FUNCTIONS ILL NEED
//addList
//removeList
//removeTodo
//markTodoAsCompleted
//removeAllTodosCompleted


// document.getElementById("displayList").innerHTML = "lists!";

// const lists = {
//     1: {name:"grocery list", tasks:[{name: 'apples', completed:false}, {name: 'bananas', completed:false}]},
//     2: {name:"grocery list two", tasks:[ {name: 'milk', completed:false}, {name: 'cheese', completed:false}]}
// }

// const currentList = lists[0];


// function render() {
//     // this will hold the html that will be displayed in the sidebar
//     let listsHtml = '<ul class="list-group">';
//     // iterate through the lists to get their names
//     lists.forEach((list) => {
//       listsHtml += `<li class="list-group-item">${list.name}</li>`;
//     });
   
//     listsHtml += '</ul>';
//     // print out the lists
   
//     document.getElementById('lists').innerHTML = listsHtml;
//     // print out the name of the current list
   
//     document.getElementById('current-list-name').innerText = currentList.name;
//     // iterate over the todos in the current list
   
//     let todosHtml = '<ul class="list-group-flush">';
//     currentList.todos.forEach((list) => {
//       todosHtml += `<li class="list-group-item">${todo.text}</li>`;
//     });
//     // print out the todos
//     document.getElementById('current-list-todos').innerHTML = todosHtml;
//    }


//    function addTodo() {
//     // get the todo text from the todo input box
//     const text = document.getElementById('todo-input-box').value;
//     if(text) {
//       currentList.todos.push({
//         text: text,
//         completed: false
//       })
//       render();
//     }
//    }


//    function save() {
//     localStorage.setItem('currentList', JSON.stringify(currentList)); 
//     localStorage.setItem('lists', JSON.stringify(lists));
//    }


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

function displayList(listData){
    let name = listData.name;
    let tasks = listData.tasks;
    let tasksHtml = getTasksHtml(tasks);
    let listName = document.querySelector('.listName')
    
    let tasksElement = document.querySelector(".tasks")


    listName.textContent = name
    tasksElement.innerHTML = tasksHtml
}

const lists = [
{name:"grocery list", tasks:[{name: 'apples', completed:false}, {name: 'bananas', completed:false}]},
{name:"grocery list two", tasks:[ {name: 'milk', completed:false}, {name: 'cheese', completed:false}]}
]

function changeList(position) {
    if(position >= lists.length) {
        alert('No list exists')
    } else {
        displayList(lists[position])
    }

    
}

function test() {
    console.log('test')
}

