import React from 'react'
import ComponentHead from './ComponentHead'
import ComponentCard from './ComponentCard'
import ComponentDec from './ComponentDec'

const Todo = () => {
  return (
    <div className='mx-10 lg:mx-4 mb-5'>
        <ComponentHead text={'TO DO'}/>
        <ComponentCard img={1} color={'gray'} tm={6}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <ComponentDec  border={''}/>
        <p>+ NEW TASK</p>
    </div>
  )
}

export default Todo