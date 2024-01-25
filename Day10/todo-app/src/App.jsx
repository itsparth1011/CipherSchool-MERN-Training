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
  return (
    <>
    <AddtodoForm/>
    <TodoList listTodos = {todos} />
    </>
  )
}

export default App