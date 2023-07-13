import React from 'react'
import Controller from './Controller'
import Todo from './Todo'
import InWork from './InWork'
import Review from './Review'
import Done from './Done'
import DevelopmentApp from './DevelopmentApp'

const Dashbord = () => {
  return (



    <div className='bg-gray-100 border-solid border-4 border-gray-200 mt-8 rounded-lg sm:px-10'>
      {/* <Controller /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  p-1 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2">
          <Todo />
          <InWork />
        </div>

        <div className='grid grid-rows-2 grid-flow-col gap-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
            <Review/>
            <Done />
          </div>

          <div class="row-start-2 row-span-2 col-span-2">
            <DevelopmentApp />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashbord