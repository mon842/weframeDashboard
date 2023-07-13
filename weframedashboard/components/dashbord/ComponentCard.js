import Image from 'next/image'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const ComponentCard = ({img,color,tm}) => {
    return (
        <div className='w-52 bg-white pb-2 rounded-lg'>
            <Image
                src={`/Image${img}.png`}
                height={350}
                width={260}
                alt='img'
            />
            <div className='flex justify-between mt-4 mx-2'>
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
            <div className='flex justify-between m-2'>

                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z" fill="#C3CAD9" />
                    </svg>
                    <p className='text-xs mt-2'>4</p>
                </div>

                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z" fill="#C3CAD9" />
                    </svg>
                    <p className='text-xs mt-2'>2</p>
                </div>

                <div className='flex'>
                    <AccessAlarmIcon sx={{
                        color: color
                    }}/>
                    <p className={`text-xs mt-2 text-${color}-500`}>{tm} Days Left</p>
                </div>
            </div>
        </div>
    )
}

export default ComponentCard