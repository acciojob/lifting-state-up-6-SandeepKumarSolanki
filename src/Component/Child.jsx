import React from 'react'
const Child = ({todos}) => {
    function handleClick(e){
        e.target.remove();
    }
  return (
    <div>
        <h3>Child Component</h3>
      {
        todos.map((item)=>(
            <li>{item}<span><button onClick={handleClick}>Complete</button></span></li>
        ))
      }
    </div>
  )
}

export default Child
