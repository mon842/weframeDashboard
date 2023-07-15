import React from 'react'
import ComponentHead from './cardComponent/ComponentHead'
import ComponentDec from './cardComponent/ComponentDec'

const Done = () => {
  return (
    <div className='flex justify-center  mt-2'>
      <div>
        <ComponentHead text={'DONE'} color={'bg-green-500'} />
        <ComponentDec border={''} />
      </div>

    </div>
  )
}

export default Done