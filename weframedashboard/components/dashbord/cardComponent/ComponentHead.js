import React from 'react'

const ComponentHead = (props) => {
    return (
        <div className={`drop-shadow-md relative h-18 w-72 md:w-72 lg:w-52 p-5 flex  bg-white rounded-lg mb-3 `}>
            <div className={`w-1 h-12 absolute top-3 left-0 ${props.color} rounded`} />

            <div className='flex space-x-8 md:space-x-6 lg:space-x-2'>

                <div className='text-base lg:text-xs w-12 text-gray-600 font-bold'>{props.text}</div>

                <button className='w-8 h-8 bg-white rounded-full border-2 border-solid border-gray-400 mx-4'>
                    5
                </button>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9" />
                    </svg>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9" />
                    </svg>
                </div>
            </div>


        </div>
    )
}

export default ComponentHead