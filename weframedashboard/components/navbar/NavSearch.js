import React from 'react'

const NavSearch = () => {
    return (
        <form className='md:w-72 w-80'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>

                <input type="search" className="block w-full p-4 pl-8 text-xs text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder='Search Products, Orders and Clients' />
                <div className='absolute top-2 right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2925 18.9625L16.1725 15.0825L12.2925 11.2025C12.1052 11.0157 12 10.762 12 10.4975C12 10.233 12.1052 9.97933 12.2925 9.7925C12.6825 9.4025 13.3125 9.4025 13.7025 9.7925L18.2925 14.3825C18.6825 14.7725 18.6825 15.4025 18.2925 15.7925L13.7025 20.3825C13.3125 20.7725 12.6825 20.7725 12.2925 20.3825C11.9125 19.9925 11.9025 19.3525 12.2925 18.9625Z" fill="#C3CAD9" />
                    </svg>
                </div>
            </div>
        </form>
    )
}

export default NavSearch