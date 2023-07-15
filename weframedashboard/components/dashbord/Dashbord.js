import React from 'react'
import Controller from './controller/Controller'
import Todo from './Todo'
import InWork from './InWork'
import Review from './Review'
import Done from './Done'
import DevelopmentApp from './developmentApp/DevelopmentApp'



const components = [
  {
    component: <h1>This is the first component</h1>,
  },
  {
    component: <p>This is the second component</p>,
  },
  {
    component: <i class="fas fa-heart"></i>,
  },
];

const Dashbord = () => {
  return (



    <div className='bg-gray-100 border-solid border-4 border-gray-200 mt-8 rounded-lg sm:px-5'>
      <div className='flex justify-center'>
        <Controller />
      </div>



      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  p-1 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2">
          <Todo />
          <InWork />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
          <Review />
          <Done />
          <div className='col-span-1 lg:col-span-2'>
            <DevelopmentApp />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashbord