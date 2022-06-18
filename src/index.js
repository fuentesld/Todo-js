import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList()

const tarea = new Todo(' Aprender javascript')
tarea.completado= false
todoList.nuevoTodo(tarea)


crearTodoHtml(tarea)

