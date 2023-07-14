import React from 'react'

const DABox = (props) => {
  return (
    <div className='m-5'>
        <p className='text-gray-400 font-bold text-xs mb-2'>{props.txt}</p>
        <p className='text-gray-600 font-bold text-xs'>{props.time}</p>
    </div>
  )
}

export default DABox