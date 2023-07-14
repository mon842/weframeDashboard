import React from 'react'
import ComponentHead from './ComponentHead'
import ComponentDec from './ComponentDec'

const Done = () => {
  return (
    <div className='ml-8 md:ml-14 lg:ml-20 mt-5 right-2'>
      <ComponentHead text={'Done'}/>
        <ComponentDec  border={''}/>
    </div>
  )
}

export default Done