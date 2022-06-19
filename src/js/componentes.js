import { todoList } from ".."
import { Todo } from "../classes"

const ulTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const botonBorrarCompletados = document.querySelector('.clear-completed')


export const crearTodoHtml = (todo)=>{
  const htmlTodo = `
    <li class="${todo.completado ? 'completed': ' '}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
        <label>${todo.tarea}</label></label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `
  const div = document.createElement('div')
  div.innerHTML = htmlTodo
  ulTodoList.append(div.firstElementChild)
  return div.firstElementChild
}

txtInput.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const newTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(newTodo)
    crearTodoHtml(newTodo)
    txtInput.value = ''
  }
})

ulTodoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName
  const todoElemento = event.target.parentElement.parentElement
  const todoId = todoElemento.getAttribute('data-id')
  if (nombreElemento.includes('input')){
    todoList.marcarCompletado(todoId)
    todoElemento.classList.toggle('completed')
  }

  if (nombreElemento.includes('button')){
    todoList.eliminarCompletados(todoId)
    ulTodoList.removeChild(todoElemento)
  }
})

botonBorrarCompletados.addEventListener('click', ()=>{
  
  todoList.eliminarCompletados()
  
  for(let i = ulTodoList.children.length - 1; i >= 0; i--){
    const elemento = ulTodoList.children[i]

    if (elemento.classList.contains('completed')){
      ulTodoList.removeChild(elemento)
    }
  }

})