import React from 'react'

const Notification = (props) => {
    return (
        <button className='bg-white rounded-full relative '>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.path} fill={props.fill} />
            </svg>
            <svg className='absolute top-0 right-0' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 31" fill="none">
                <rect x="10" y="10.5" width="10" height="10" rx="5" fill={props.col} />
            </svg>
            
        </button>
    )
}

export default Notification