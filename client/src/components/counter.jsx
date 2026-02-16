import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='text-center'>
      <h2 className='font-bold'>Count: {count}</h2>
      <div className='flex justify-center space-x-2 mt-4'>
        <button  className='border rounded-lg px-4 py-2' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='border rounded-lg px-4 py-2' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='border rounded-lg px-4 py-2' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
