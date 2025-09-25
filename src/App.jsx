import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterDisplay from './Components/CounterDisplay'
import CounterControls from './Components/CounterControls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div 
    className='min-h-screen bg-purple-200 flex flex-col items-center justify-start'>
      <h1 
      className='bg-red-400 hover:bg-red-500 font-bold text-6xl border-2 border-black p-4 mt-7 rounded-3xl'>
        Counter-app</h1>
      <CounterDisplay count={count}/>
      <CounterControls count={count} setCount={setCount}/>
      </div>
      
    </>
  )
}

export default App
