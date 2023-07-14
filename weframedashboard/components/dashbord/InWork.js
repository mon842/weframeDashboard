import React from 'react'
import ComponentHead from './ComponentHead'
import ComponentDec from './ComponentDec'
import ComponentCard from './ComponentCard'

const InWork = () => {
  return (
    <div className='mx-10 lg:mx-4 mb-5'>
        <ComponentHead text={'IN WORK'}/>
        <ComponentDec/>
        <ComponentCard img={2} color={'red'} tm={1}/>
        <ComponentDec border={'border-4 border-red-400'}/>
        <p>+ NEW TASK</p>
    </div>
  )
}

export default InWork