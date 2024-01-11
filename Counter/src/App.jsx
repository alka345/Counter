import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
  }
  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={addValue}>Add Value:{count <20 ? count : "20"}</button>
      <button
        onClick={removeValue}>Remove Value:{count > 0 ? count : "0"}</button>
    </>
  )
}

export default App
