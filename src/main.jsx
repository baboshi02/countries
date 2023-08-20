
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'


function App(){

  const [count,setCount]=useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }

  return (<>
    <h1>
      {count}
    </h1>
    <button onClick={increment}>
      +
    </button>
    <button onClick={decrement}>
      -
    </button>
  </>)
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)