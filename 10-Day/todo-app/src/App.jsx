import React, { useState } from 'react'
import AddtodoForm from './Components/AddtodoForm'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false
    },
    {
      id: "2",
      title: "Read Book",
      completed: true
    },
    {
      id: "3",
      title: "Write Code",
      completed: true
    }
  ])

  // function 

  return (
    <>
    <AddtodoForm/>
    <TodoList listTodos = {todos} />
    </>
  )
}

export default App

//create a function in app 
// that function will take newTodo as input                      
// then this function add newTodo to app state           


// pass this function to addTodoForm via prop
// accept this function inside AddtodoForm 


// onsubmit event 
// create newtodo (already done)
// call that function (addTodo)


