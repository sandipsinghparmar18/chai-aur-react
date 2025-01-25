import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <p>
        This is a simple todo app that uses Redux Toolkit to manage state. You can add and remove todos.
      </p>
      <div className="container mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
