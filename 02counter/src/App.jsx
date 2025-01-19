import { useState } from 'react'
import './App.css'

function App() {
  //let counter=5
  let [counter,setCounter]=useState(18);

  const addValue=()=>{
    setCounter(counter+1);
  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>addCount</button>
      <br/>
      <button onClick={removeValue}>removeCount</button>
    </>
  )
}

export default App
