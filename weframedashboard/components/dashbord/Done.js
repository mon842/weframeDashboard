import React from 'react'
import ComponentHead from './ComponentHead'
import ComponentDec from './ComponentDec'

const Done = () => {
  return (
    <div className='mx-16 mt-5 right-2'>
      <ComponentHead text={'Done'}/>
        <ComponentDec  border={''}/>
    </div>
  )
}

export default Done