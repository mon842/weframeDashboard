import React from 'react'
import { useState } from 'react'
import NavButtons from './NavButtons';


const arr = [
    {
        path: "M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM15 8.5C16.66 8.5 18 9.84 18 11.5C18 13.16 16.66 14.5 15 14.5C13.34 14.5 12 13.16 12 11.5C12 9.84 13.34 8.5 15 8.5ZM15 22.7C12.5 22.7 10.29 21.42 9 19.48C9.03 17.49 13 16.4 15 16.4C16.99 16.4 20.97 17.49 21 19.48C19.71 21.42 17.5 22.7 15 22.7Z"

    },
    {
        path: "M14.5865 25C15.6865 25 16.5865 24.1 16.5865 23H12.5865C12.5865 24.1 13.4765 25 14.5865 25ZM20.5865 19V14C20.5865 10.93 18.9465 8.36 16.0865 7.68V7C16.0865 6.17 15.4165 5.5 14.5865 5.5C13.7565 5.5 13.0865 6.17 13.0865 7V7.68C10.2165 8.36 8.58648 10.92 8.58648 14V19L7.29648 20.29C6.66648 20.92 7.10648 22 7.99648 22H21.1665C22.0565 22 22.5065 20.92 21.8765 20.29L20.5865 19Z"
    },
    {
        path: "M15 5.5C9.47 5.5 5 9.97 5 15.5C5 21.03 9.47 25.5 15 25.5C20.53 25.5 25 21.03 25 15.5C25 9.97 20.53 5.5 15 5.5ZM19.3 19.8C18.91 20.19 18.28 20.19 17.89 19.8L15 16.91L12.11 19.8C11.72 20.19 11.09 20.19 10.7 19.8C10.5127 19.6132 10.4075 19.3595 10.4075 19.095C10.4075 18.8305 10.5127 18.5768 10.7 18.39L13.59 15.5L10.7 12.61C10.5127 12.4232 10.4075 12.1695 10.4075 11.905C10.4075 11.6405 10.5127 11.3868 10.7 11.2C11.09 10.81 11.72 10.81 12.11 11.2L15 14.09L17.89 11.2C18.28 10.81 18.91 10.81 19.3 11.2C19.69 11.59 19.69 12.22 19.3 12.61L16.41 15.5L19.3 18.39C19.68 18.77 19.68 19.41 19.3 19.8Z"
    }

]

const navT = [
    {
        txt: 'Home'
    },
    {
        txt: 'About us'
    },
    {
        txt: 'News'
    },
    {
        txt: 'User Policy'
    },
    {
        txt: 'Contacts'
    }

]


const Navbar = () => {
    const [hidden, setHidden] = useState('hidden');
    const [toggle, setToggle] = useState(true);
    const Handletoggle = () => {
        setToggle(!toggle);
        toggle ? setHidden('hidden') : setHidden('');
    }

    return (
        <div className='border-gray-200 border-b-4'>

            <nav className="bg-gray-100 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button onClick={Handletoggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <a href="" className="flex items-center">
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-600 ">Constructor</span>
                    </a>



                    <div className={`${hidden} w-full md:block md:w-auto `} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 ">
                            {
                                navT.map(t => (
                                    <li key={t.txt} className='pt-4'>
                                        <a href="#" className=" block py-2 pl-3 pr-4 text-gray-500  rounded md:bg-transparent  md:p-0 ">{t.txt}</a>
                                    </li>
                                ))
                            }

                            <li className='pt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9" />
                                </svg>
                            </li>
                            <li>

                                <form className='md:w-72 w-80'>
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>

                                        <input type="search" className="block w-full p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder='Search Products, Orders and Clients' />
                                        <div className='absolute top-3 right-0'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2925 18.9625L16.1725 15.0825L12.2925 11.2025C12.1052 11.0157 12 10.762 12 10.4975C12 10.233 12.1052 9.97933 12.2925 9.7925C12.6825 9.4025 13.3125 9.4025 13.7025 9.7925L18.2925 14.3825C18.6825 14.7725 18.6825 15.4025 18.2925 15.7925L13.7025 20.3825C13.3125 20.7725 12.6825 20.7725 12.2925 20.3825C11.9125 19.9925 11.9025 19.3525 12.2925 18.9625Z" fill="#C3CAD9" />
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                            </li>

                        </ul>
                    </div>

                    <div className='flex space-x-5'>
                        <NavButtons path={arr[0].path} />

                        <p className='hidden lg:block mt-1 text-gray-500 font-bold'>Clayton Santos</p>
                        <div className='hidden lg:block flex space-x-5'>
                            <NavButtons path={arr[1].path} />
                            <NavButtons path={arr[2].path} />
                        </div>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar