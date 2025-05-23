const tasks = [];

const form = document.getElementById('toDoForm');
const aTask = document.getElementById('task')
const send = document.getElementById('sub')
const list =  document.getElementById('listTasks')
const URIError = document.getElementById('uiError')
let error = ""





function addTask(e){
     e.preventDefault()
  
    const toDo = aTask.value.trim()

    if(!toDo){
       URIError.style.color = 'red'
       URIError.textContent = "Add a task please!!"
        return
    }
  
    URIError.textContent = "" // clear error



    tasks.push(toDo) 

    aTask.value = "" 

    
    

    renderTasks();

    function renderTasks() {
        list.innerHTML = "";
        tasks.forEach((task) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const label = document.createElement('label');
            label.textContent = task;

            const deleteBtn = document.createElement('button');
           

            li.appendChild(checkbox);
            li.appendChild(label);
         

            list.appendChild(li);
        });
    }
}



send.addEventListener('click', addTask)