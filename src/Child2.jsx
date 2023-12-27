import React from 'react'

const Child2 = ({age}) => {
    console.log(age);
  return (
    <div>
        <h2>Child2</h2>
        <h2>{age}</h2>
    </div>
  )
}

export default Child2