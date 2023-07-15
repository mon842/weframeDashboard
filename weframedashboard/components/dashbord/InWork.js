import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'
import ComponentCard from './cardComponent/ComponentCard'

const InWork = () => {
  return (
    <div className='flex justify-center  mb-5'>
      <div >
        <ComponentHead text={'IN WORK'}  color={'bg-blue-500'}/>
        <ComponentDec/>
        <ComponentCard img={2} color={'red'} tm={1}/>
        <ComponentDec border={'border-2 border-red-400'}/>
        <p  className='font-bold text-gray-500'>+ NEW TASK</p></div>
        
    </div>
  )
}

export default InWork