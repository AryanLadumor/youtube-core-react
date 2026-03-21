import React from 'react'
import { DEFAULT_USER_ICON } from '../utils/constants'
const Comment = ({data}) => {
    const {name , text , replies} = data
    return (
    <div className='flex  border  items-center'>
        <img src={DEFAULT_USER_ICON} alt="" className='w-9 h-10' />
        <div className='p-1 '>
            <h4 className='font-semibold'>{name}</h4>
            <p className='ml-2'>{text}</p>
        </div>
    </div>
  )
}

export default Comment