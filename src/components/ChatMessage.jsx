import React from 'react'
import  photourl  from '../utils/helper'
const ChatMessage = ({name,message,image}) => {
  return (
    <div className='flex items-center m-2'>
         
        
              <img className="h-8 rounded-full" alt="usericon" src={image}></img>
      
         
        
    <h1 className='px-2 font-bold '>{name}</h1>
    <p className=''>{message}</p>
  
    </div>
  )
}

export default ChatMessage