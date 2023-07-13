import React from 'react'
import ComponentHead from './ComponentHead'
import ComponentDec from './ComponentDec'
import AddTask from './AddTask'

const Review = () => {
  return (
    <div className='m-4 '>
        <ComponentHead text={'REVIEW'}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <AddTask/>
    </div>
  )
}

export default Review