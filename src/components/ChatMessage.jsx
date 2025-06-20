import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center m-2'>
          
         <img className="h-8 rounded-full" alt="usericon" src="https://yt4.ggpht.com/UAnsd9ds7W8OiMGgaAgCbO8sEv3LQz9jYVa7nCqW5rXVZiwiBflyurVFcUEzWu0ApLTeF4kk=s64-c-k-c0x00ffffff-no-rj"></img>
    <h1 className='px-2 font-bold '>{name}</h1>
    <p className=''>{message}</p>
  
    </div>
  )
}

export default ChatMessage