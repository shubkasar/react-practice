import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter=10;
  const addValue = () => {

    if(counter<20){
      counter+=1;
      console.log("Value Added", counter);
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter>0){
      counter -=1;
      console.log(counter);
      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1>Shubham and React Hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add {counter}</button>
      <br />
      <button onClick={removeValue} >Remove</button>
    </>
  )
}

export default App
