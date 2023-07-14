import React from 'react'

const Feature = (props) => {
    return (
        <div className='rounded-lg border-solid border-2 border-gray-200  flex justify-center items-center h-30  p-2'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d={props.img} fill="#C3CAD9" />
                </svg>
                <p className='mb-4'>{props.txt}</p>
            </div>
        </div>
    )
}

export default Feature