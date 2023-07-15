import React from 'react'
import { useState } from 'react'

const Feature = (props) => {

    return (
        <div>
            <div className='flex justify-center items-center h-16 p-2 '>
                <svg className='fill-slate-400 hover:fill-blue-600' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d={props.img}  />
                </svg>
            </div>
            <p className='w-32 md:ml-20 lg:ml-0 lg:w-32  flex justify-center  mb-2'>{props.txt}</p>
        </div>

    )
}

export default Feature