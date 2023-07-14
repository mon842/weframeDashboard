import Image from 'next/image'
import React from 'react'
import Features from './Features'
import Socials from './Socials'

const ChatDetails = () => {
  return (
    <div className='m-8'>

      <div class="grid grid-rows-5 grid-flow-col gap-4">
        <div class="row-span-2 ">

          <div class="grid grid-rows-4 grid-flow-col gap-4">
            <div class="row-span-1 ">
              <div className="flex justify-between px-12">

                <button className='bg-white rounded-full'>
                  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon">
                      <path id="Icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M14 14.5C16.0627 14.5 17.7333 12.8293 17.7333 10.7667C17.7333 8.70399 16.0627 7.03333 14 7.03333C11.9373 7.03333 10.2667 8.70399 10.2667 10.7667C10.2667 12.8293 11.9373 14.5 14 14.5ZM14 16.3667C11.508 16.3667 6.53333 17.6173 6.53333 20.1V21.0333C6.53333 21.5467 6.95333 21.9667 7.46666 21.9667H20.5333C21.0467 21.9667 21.4667 21.5467 21.4667 21.0333V20.1C21.4667 17.6173 16.492 16.3667 14 16.3667Z" fill="#C3CAD9" />
                    </g>
                  </svg>
                </button>

                <button className='bg-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9" />
                  </svg>
                </button>


              </div>
            </div>

            <div class="row-span-2 flex justify-center items-center relative">


              <svg className='absolute z-0' width="132" height="133" viewBox="0 0 132 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="Base" cx="66" cy="66.5" r="65" stroke="#DADEE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg className='absolute z-1' width="132" height="133" viewBox="0 0 132 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Line" d="M66 1.5C30.1015 1.5 1 30.6015 1 66.5C1 102.399 30.1015 131.5 66 131.5V131.5C101.899 131.5 131 102.399 131 66.5" stroke="#3361FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <Image
                className='rounded-full'
                src={'/dp6.png'}
                alt='dp'
                height={100}
                width={100}
              />
            </div>

            <div class="row-span-1 flex justify-center items-center mt-4">
              <div>
                <p className='text-lg font-bold text-gray-500'>Hello Alfred Bryant</p>
                <p className='text-sm font-semibold text-gray-300'>adrain.nader@yahoo.com</p>
              </div>

            </div>
          </div>

        </div>
        <div class="row-span-2 ">
          <Features />
        </div>

        <div class="row-span-1 mt-2">
          <Socials />
        </div>
      </div>

    </div>
  )
}

export default ChatDetails