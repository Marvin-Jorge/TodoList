import React from 'react'
import './TodoForm.css';
import { useState,useEffect } from 'react';
import axios from 'axios'
function TodoForm() { 
    const [error,setError]=useState(null)
    const [todos,setTodos]=useState([])//Vetor para guardar informacoes//
   const[todo,setTodo]=useState("")
  
  const [todoEditing, setTodoEditing] =useState(null);
  const [editingText, setEditingText] =useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/adicionados",todos).then((response) => {
     console.log(response);
    });
    
  }, [todos]);
  function handleSubmit(event){
    event.preventDefault()
   
    const newTodo={
      
        id:new Date().getTime(),
        text: todo,
        
        
        
      }
      if(todo.length<3){
        setError()
        window.alert("Escreve pelo menos uma palavra de 3 letras")
        return false
      }
      axios.post("http://localhost:3001/adicionar",newTodo,
      ).then(response=>{
        console.log(response);
      })

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }
  function eliminarTodo(id){
    axios.post("http://localhost:3001/eliminar",id
      ).then(response=>{
        console.log(response);
      })
    if(window.confirm("Tens a certeza queres Eliminar a Todo?")){
const updatedTodos = [...todos].filter((todo)=>todo.id !==id);
setTodos(updatedTodos)

   } }
   function editarTodo(id) {
    axios.get("http://localhost:3001/editar",todos).then((response) => {
      console.log(response);
     });
     
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("")
 
  }
  function Completo(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="Todo-App">
        <h1>Todo List App</h1>
    <form onSubmit={handleSubmit}error={error}>
    
      <input type='text'onChange={(event)=> setTodo(event.target.value)} value={todo}/>
      <button type='onSubmit'>Adicionar Todo</button>
    </form>
    {todos.map((todo)=> <div key={todo.id}className="todo">
<div className="todo-text">
<input  type="checkbox" id="completed"checked={todo.completed} onChange={() => Completo(todo.id)}
/>
  {todoEditing===todo.id ? (
    <input type="text" onChange={(e)=> setEditingText(e.target.value)}
    value={editingText}
    />

  ):(<div>{todo.text}</div>)}
</div>
  
  <br></br>
  <div className="todo-actions">
  
  <button onClick={() => eliminarTodo(todo.id)}>Delete</button>
  
  
  {todoEditing===todo.id ? ( <button onClick={()=> editarTodo(todo.id)}
  > Atualizar</button>):(<button onClick={() => setTodoEditing(todo.id)}>Editar Todo</button>)}
  
  </div>
  
  </div>)}
    
</div>
  )
};



export default TodoForm




