import React from 'react'
import './TodoForm.css';
function TodoForm() {
  return (
    <div className="Todo-App">
        <h1>Todo List App</h1>
    <form>
      <input type='text'/>
      <button type='onSubmit'>Adicionar Todo</button>
    </form>
    </div>
  )
}

export default TodoForm
