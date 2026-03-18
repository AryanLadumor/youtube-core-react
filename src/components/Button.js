import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-7 py-1 m-2 bg-gray-200  font-semibold rounded-lg hover:scale-105 transition duration-75 ' >{name}</button>
    </div>
  )
}

export default Button