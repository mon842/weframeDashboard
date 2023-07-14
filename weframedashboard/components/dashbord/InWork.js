import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'
import ComponentCard from './cardComponent/ComponentCard'

const InWork = () => {
  return (
    <div className='mx-10 lg:mx-4 mb-3  mt-4 '>
        <ComponentHead text={'IN WORK'}  color={'border-blue-500'}/>
        <ComponentDec/>
        <ComponentCard img={2} color={'red'} tm={1}/>
        <ComponentDec border={'border-4 border-red-400'}/>
        <p  className='font-bold text-gray-500'>+ NEW TASK</p>
    </div>
  )
}

export default InWork