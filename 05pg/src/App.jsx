import { useCallback, useState, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charaAllowed, setCharaAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // use ref
  const passwordRef = useRef(null)

    const passwordgenerator = useCallback( () =>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
      if (numberAllowed) str +="012345789"
      if (charaAllowed) str +="!@#$%&*-_+=[]{}`~"
      for (let i = 1; i <= length; i++){
        let char =Math.floor(Math.random()*str.length)

        pass += str.charAt(char)
      }
      setPassword(pass)

},[length,numberAllowed,setPassword])

const copypasswordtocilpboard = useCallback(() =>{
passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordgenerator()

}, [length, numberAllowed, charaAllowed, passwordgenerator])
  

  return (
    <>
      <div className='max-w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 text-orange-400 bg-red-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
           />
           <button onClick={copypasswordtocilpboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
              min ={8} 
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label> Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked ={numberAllowed}
            id='numberinput' 
            onChange={() => { setnumberAllowed((prev) =>! prev)}}/>
            <label htmlFor="numberinput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked ={charaAllowed}
            id='characterinput' 
            onChange={() => { setCharaAllowed((prev) =>! prev)}}/>
            <label htmlFor="characterinput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
