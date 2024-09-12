import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-96 h-96 duration-500"
    style={{backgroundColor: color}}
    > 
      <div
      className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='fixed flex flex-wrap justify-center gap-7 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >RED</button>
          <button
          onClick={()=> setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >BLUE</button>
          <button
          onClick={()=> setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >GREEN</button>
          <button
          onClick={()=> setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >ORANGE</button>
        </div>
      </div>

    </div>

      
  )
}

export default App
