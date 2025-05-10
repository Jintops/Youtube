import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-2  px-4 m-1 mt-4 rounded-lg bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button
