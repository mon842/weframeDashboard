
import React from 'react'

const NavButtons = (props) => {
    return (
        <button className='bg-white rounded-full '>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.path} fill="#C3CAD9" />
            </svg>
         </button>

    )
}

export default NavButtons