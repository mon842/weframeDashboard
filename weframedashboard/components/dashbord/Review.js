import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'
import AddTask from './AddTask'

const Review = () => {
  return (
    <div className='flex justify-center mb-5 m-2'>
      <div>
        <ComponentHead text={'REVIEW'}  color={'bg-yellow-500'}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <AddTask/>
      </div>
        
    </div>
  )
}

export default Review
// flex justify-center 