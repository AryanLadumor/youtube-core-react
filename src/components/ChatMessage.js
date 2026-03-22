import React from 'react'
import { DEFAULT_USER_ICON } from '../utils/constants'
const ChatMessage = ({data}) => {
    const {name , msg} = data
  return (
    <div className='flex items-center p-1 shadow-sm'>
        <img src={DEFAULT_USER_ICON} alt="" className='w-8 h-8' />
        <span className='font-bold px-3' >{name}</span>
        <span className="text-sm">{msg}</span>
    </div>
  )
}

export default ChatMessage