import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,coffeecounter] = useState(10)

  // let counter = 75
  const AddValue = () =>{
    if (counter < 20){
      coffeecounter(counter + 1)
    }
    else{
      alert("MAXIMUM VALUE REACHED")
    }
    
  }
  const removevalue = () =>{
    if (counter > 0){
      coffeecounter(counter - 1)
    }else{
      alert("MINIMUM VALUE REACHED")
    }
  }


  return (
    <>
    <div className="container">

      <h1 className='tittle'>Coffee or react</h1>
      <h2 className='counter'>counter value : {counter}</h2>
      <div className="coffee-cup"></div>

      <button className='button'
      onClick={AddValue}
      >Add value {counter}</button>
      <br></br>
      <button className='button'
      onClick={removevalue}
      >Remove{counter}</button>
      </div>

    </>
  )
}

export default App
