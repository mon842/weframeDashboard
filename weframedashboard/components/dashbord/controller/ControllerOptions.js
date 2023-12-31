import React from 'react'

const ControllerOptions = (props) => {
    return (
        <div className={`${props.h} mx-10 lg:mx-3 lg:block`}>
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d={props.d} fill={props.fill} />
                </svg>
                <p className={`md:text-base lg:text-xs font-semibold mt-3 ${props.col}`}>{props.txt}</p>
            </div>


        </div>
    )
}

export default ControllerOptions