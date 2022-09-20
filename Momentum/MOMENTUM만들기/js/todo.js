const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KET = "todos"

let toDos = []

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
}

function saveToDos(){
    localStorage.setItem(TODOS_KET, JSON.stringify(toDos))
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText="X"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}


function handleTodoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text : newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KET)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}