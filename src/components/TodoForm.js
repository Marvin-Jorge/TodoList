import React from 'react'
import './TodoForm.css';
import { useState } from 'react';
function TodoForm() {
    const [todos,setTodos]=useState([])//Vetor para guardar informacoes//
  const[todo,setTodo]=useState("")
  function handleSubmit(event){
    event.preventDefault()
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
    
      <input type='text'onChange={(event)=> setTodo(event.target.value)} value={todo}/>
      <button type='onSubmit'>Adicionar Todo</button>
    </form>
    {todos.map((todo)=><div key={todo.id} className="todo">
    </div>
  )
}

export default TodoForm
