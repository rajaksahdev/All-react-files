import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {

  const [count, setCount] = useState(0)
  let myobj = {
    username: "sammi",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-2xl'>tailwind</h1>
     
    <Card username='coffeeorreact' someobj={myobj}/>
    <Card />
    
    </>
  )
}

export default App
