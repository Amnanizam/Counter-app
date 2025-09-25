import React from 'react'

const CounterControls = ({count,setCount}) => {
  return (
    <div className='flex flex-col items-center mt-4 gap-4'>
    <div className='flex gap-2' >
      <button 
      className='bg-red-400 hover:bg-red-500 font-bold text-4xl border-2 border-black cursor-pointer p-2 rounded-3xl' 
      onClick={()=>setCount(count+1)}>Increment</button>
      <button 
      className='bg-red-400 hover:bg-red-500 font-bold text-4xl border-2 border-black cursor-pointer p-2 rounded-3xl' 
      onClick={()=>setCount(count>0 ? count-1:0)}>Decrement</button>
      </div>
      <button 
      className='bg-red-400 hover:bg-red-500 font-bold text-4xl border-2 border-black cursor-pointer p-2 rounded-3xl flex gap-2' 
      onClick={()=>setCount(count=0)}>Reset</button>
    </div>
  )
}

export default CounterControls
