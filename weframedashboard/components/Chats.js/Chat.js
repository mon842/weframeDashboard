import Image from 'next/image';
import React from 'react'
import { useState } from 'react'

const arr = [
    {
        path: "M15 14.4C14.39 14.4 13.9 14.89 13.9 15.5C13.9 16.11 14.39 16.6 15 16.6C15.61 16.6 16.1 16.11 16.1 15.5C16.1 14.89 15.61 14.4 15 14.4ZM15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM17.19 17.69L9 21.5L12.81 13.31L21 9.5L17.19 17.69Z"
    },
    {
        path: "M14.557 21.1975L18.707 23.7075C19.467 24.1675 20.397 23.4875 20.197 22.6275L19.097 17.9075L22.767 14.7275C23.437 14.1475 23.077 13.0475 22.197 12.9775L17.367 12.5675L15.477 8.1075C15.137 7.2975 13.977 7.2975 13.637 8.1075L11.747 12.5575L6.91696 12.9675C6.03696 13.0375 5.67696 14.1375 6.34696 14.7175L10.017 17.8975L8.91696 22.6175C8.71696 23.4775 9.64696 24.1575 10.407 23.6975L14.557 21.1975Z"
    },
    {
        path: "M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z"
    },
    {
        path: "M19.4325 10.35L20.8725 11.79L15.9925 16.67L12.7025 13.38C12.5157 13.1927 12.262 13.0875 11.9975 13.0875C11.733 13.0875 11.4793 13.1927 11.2925 13.38L5.2925 19.39C4.9025 19.78 4.9025 20.41 5.2925 20.8C5.6825 21.19 6.3125 21.19 6.7025 20.8L11.9925 15.5L15.2825 18.79C15.6725 19.18 16.3025 19.18 16.6925 18.79L22.2825 13.21L23.7225 14.65C24.0325 14.96 24.5725 14.74 24.5725 14.3V10C24.5825 9.72 24.3625 9.5 24.0825 9.5H19.7925C19.3425 9.5 19.1225 10.04 19.4325 10.35Z"
    },
    {
        path: "M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM14 23.43C10.05 22.94 7 19.58 7 15.5C7 14.88 7.08 14.29 7.21 13.71L12 18.5V19.5C12 20.6 12.9 21.5 14 21.5V23.43ZM20.9 20.89C20.64 20.08 19.9 19.5 19 19.5H18V16.5C18 15.95 17.55 15.5 17 15.5H11V13.5H13C13.55 13.5 14 13.05 14 12.5V10.5H16C17.1 10.5 18 9.6 18 8.5V8.09C20.93 9.28 23 12.15 23 15.5C23 17.58 22.2 19.47 20.9 20.89Z"
    },
    {
        path: "M18 15.0825V9.91249C18 9.38249 17.79 8.87249 17.41 8.50249L15.7 6.79249C15.5132 6.60523 15.2595 6.5 14.995 6.5C14.7305 6.5 14.4768 6.60523 14.29 6.79249L12.59 8.49249C12.21 8.87249 12 9.38249 12 9.91249V11.0825H8C6.9 11.0825 6 11.9825 6 13.0825V23.0825C6 24.1825 6.9 25.0825 8 25.0825H22C23.1 25.0825 24 24.1825 24 23.0825V17.0825C24 15.9825 23.1 15.0825 22 15.0825H18ZM10 23.0825H8V21.0825H10V23.0825ZM10 19.0825H8V17.0825H10V19.0825ZM10 15.0825H8V13.0825H10V15.0825ZM16 23.0825H14V21.0825H16V23.0825ZM16 19.0825H14V17.0825H16V19.0825ZM16 15.0825H14V13.0825H16V15.0825ZM16 11.0825H14V9.08249H16V11.0825ZM22 23.0825H20V21.0825H22V23.0825ZM22 19.0825H20V17.0825H22V19.0825Z"
    }

];

const profiles=[
    {
        n:2,
        col:'orange'
    },
    {
        n:4,
        col:'pink'
    },
    {
        n:5,
        col:'purple'
    },
    {
        n:3,
        col:'yellow'
    },
] 

const Chat = () => {
    const [show, setShow] = useState('-translate-x-full');
    const handleClick = () => {
        // setShow('');
        console.log('w');
        show == '' ? setShow('-translate-x-full') : setShow('');
    }

    return (
        <div className=' bg-gray-100 h-4'>

            <button onClick={handleClick} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button"
                className="border-gray-300 border-r-4 bg-white rounded-full inline-flex items-center p-2 top-0 ml-3 text-sm text-gray-500 hover:bg-gray-100 ">

                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#C3CAD9" />
                </svg>
            </button>

            <aside  id="default-sidebar" className={`fixed border-gray-300 border-r-4   left-0 z-40 w-16 h-screen transition-transform ${show}  `} aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto bg-gray-100 ">
                    <ul className="space-y-2 font-medium">


                        {
                            arr.map((item) => (
                                <li key={item.path}>
                                    <button className="bg-white rounded-full ml-3 ">
                                        <svg width="25" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Icon">
                                                <path id="Icon_2" fill-rule="evenodd" clip-rule="evenodd" d={item.path} fill="#3361FF" />
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className=" px-3 py-4 overflow-y-auto bg-gray-100 ">
                    <ul className="space-y-2 font-medium">
                        
                        { profiles.map(profile =>(
                            <li key={profile.n}>
                            <button className={`bg-${profile.col}-500 rounded-full`}>
                                <Image
                                    className='rounded-full'
                                    src={`/dp${profile.n}.png`}
                                    alt='img'
                                    height={30}
                                    width={30}
                                />
                            </button>


                        </li>
                        ))}
                        <li className='mb-10'>
                            <button className='bg-white rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9" />
                                </svg>
                            </button>

                        </li>

                    </ul>
                </div>


            </aside>

        </div>
    )
}

export default Chat