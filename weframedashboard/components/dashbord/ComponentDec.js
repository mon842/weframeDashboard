import Image from 'next/image'
import React from 'react'

const ComponentDec = (props) => {
  return (
    <div className={`bg-white w-52 rounded-lg m-2 p-2 ${props.border}`}>
        <div className='flex justify-between mt-4  '>
                <p className='text-xs from-neutral-400'>Space Tasks 2</p>
                <Image
                    className='rounded-full'
                    src={'/base.png'}
                    height={30}
                    width={20}
                    alt='img'
                />
            </div>
            <p className='text-sm my-4'>Make Money Online Through</p>
    </div>
  )
}

export default ComponentDec