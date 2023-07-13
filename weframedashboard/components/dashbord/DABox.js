import React from 'react'

const DABox = (props) => {
  return (
    <div className='m-5'>
        <p>{props.txt}</p>
        <p>{props.time}</p>
    </div>
  )
}

export default DABox