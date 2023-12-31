import React from 'react'

const ComponentDec = (props) => {
  return (
    <div className={`drop-shadow-md h-24 w-72 md:w-72 lg:w-52 bg-white rounded-lg my-3 p-2 ${props.border} text-gray-400`}>
        <div className='flex justify-between mt-4  '>
                <p className='text-xs from-neutral-400'>Space Tasks 2</p>

                <img className='h-5 w-5 rounded-full' src={'/dp4.png'} alt='img' />
            </div>
            <p className='text-xs my-4 text-gray-500 font-bold'>Make Money Online Through</p>
    </div>
  )
}

export default ComponentDec