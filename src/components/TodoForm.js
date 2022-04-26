import React from 'react'
import './TodoForm.css';
import { useState } from 'react';
function TodoForm() {
    const [todos,setTodos]=useState([])//Vetor para guardar informacoes//
  const[todo,setTodo]=useState("")
  function handleSubmit(e){
    e.preventDefault()
    const newTodo={
        id:new Date().getTime(),
        text: todo,
        completed:false,
        
        
      }
    setTodos([...todos].concat(newTodo))
    setTodo("")
  }
  return (
    <div className="Todo-App">
        <h1>Todo List App</h1>
    <form onSubmit={handleSubmit}>
    
      <input type='text'/>
      <button type='onSubmit'>Adicionar Todo</button>
    </form>
    </div>
  )
}

export default TodoForm
