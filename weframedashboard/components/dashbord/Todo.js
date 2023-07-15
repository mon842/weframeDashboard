import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentCard from './cardComponent/ComponentCard'
import ComponentDec from './cardComponent/ComponentDec'

const Todo = () => {
  return (
    <div className='flex justify-center items-center mb-5'>
      <div>
      <ComponentHead text={'TO DO'} color={'bg-purple-500'}/>
        <ComponentCard img={1} color={'gray'} tm={6}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <p className='font-bold text-gray-500'>+ NEW TASK</p>
      </div>
        
    </div>
  )
}

export default Todo