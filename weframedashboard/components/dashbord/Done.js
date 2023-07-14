import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'

const Done = () => {
  return (
    <div className='ml-8 md:ml-14 lg:ml-20 mt-5 right-2'>
      <ComponentHead text={'DONE'}  color={'border-green-500'}/>
      <ComponentDec  border={''}/>
    </div>
  )
}

export default Done