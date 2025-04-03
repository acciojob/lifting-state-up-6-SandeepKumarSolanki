import React, { useState } from 'react'
import Child from './Child'

let arr = ["Learn React" , "Build a React app" , "Deploy the React app"]
const Parent = () => {
    const [todos , setTodos] = useState(arr)
  return (
    <div>
        <h1>Parent Component</h1>
      <Child 
        todos = {todos}
      />
    </div>
  )
}

export default Parent
