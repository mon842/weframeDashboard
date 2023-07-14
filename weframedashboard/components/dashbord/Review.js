import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'
import AddTask from './AddTask'

const Review = () => {
  return (
    <div className='ml-12 lg:ml-4 mb-6  mt-4 '>
        <ComponentHead text={'REVIEW'}  color={'border-yellow-500'}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <AddTask/>
    </div>
  )
}

export default Review