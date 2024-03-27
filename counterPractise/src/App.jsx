import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  // function addValue(){
  //   if (count < 20) {
  //     setCount(count + 1);      
  //   }

  //     console.log(count);
  // }
  let addValue = () =>{
    if (count < 20) {
          setCount(count + 1);      
        }
    
          console.log(count);
  }
  // function removeValue(){
  //   if (count > 0) {
  //     setCount(count - 1);      
  //   }

  //     console.log(count);
  // }
  let removeValue = () => {
    if (count > 0) {
          setCount(count - 1);      
        }
    
          console.log(count); 
  }

  return (
    
 <div className='h-screen w-full bg-slate-300 flex items-center justify-center rounded'>
  <div className='bg-slate-800 text-white flex-col items-center justify-center p-11'> 
  <h1 className='flex items-center justify-center mb-11 font-bold text-3xl'>Counter</h1>
  <p className='flex items-center justify-center bg-white p-5 mb-11 text-black'>{count}</p>
  <button 
  onClick={addValue}
  className='bg-white text-black rounded px-5 py-2'>Add Value</button>
  {/* <br /> */}
  <button 
  onClick={removeValue}
  className='bg-white text-black rounded px-5 py-2 ml-8'>Remove Value </button>
  </div>
 </div>
  )
}

export default App
