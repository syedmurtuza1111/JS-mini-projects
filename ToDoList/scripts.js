document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById('todo-input')
const  addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

let tasks= JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach(ttask => renderTask(ttask))
addTaskButton.addEventListener('click',(e)=>{
   taskText = todoInput.value.trim();
   if(taskText === '')return;

   const newTask={
    id:Date.now(),
    text: taskText,
    completed :false,
   }
   
   tasks.push(newTask)
   console.log(tasks)
   save()
   renderTask(newTask)

   todoInput.value=''



})

function renderTask(task){
    const li = document.createElement('li')
    li.setAttribute('data-id', task.id)
    if(li.completed) li.classList.add('completed')
    li.innerHTML=`<span>${task.text}</span> <button>Delete</button>`
    
    li.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON')return;
        task.completed !== completed
        li.classList.toggle('completed')
        save();

    })

    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation()
        tasks = tasks.filter(t => t.id !== task.id )
        li.remove()
        save()
    })

    todoList.appendChild(li)


}

function save(){
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

})