import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

const ChatMessages=useSelector(store=>store.chat.messages)

  const dispatch=useDispatch();

  useEffect(()=>{

    const i=setInterval(()=>{
     dispatch(addMessage({name:generateRandomName(), 
        message:makeRandomMessage(15)}))
    },2000);

    return ()=>clearInterval(i);

  },[])

  return (
    <div className='border border-black mx-8 h-[750px] p-2 bg-slate-100 rounded-xl overflow-scroll flex flex-col-reverse'>
        <h1 className='px-2 text-xl  border-t-1'>Top chat</h1>
        
        {
            ChatMessages.map((c)=>(
                 <ChatMessage name={c.name} message={c.message} />
            ))
        }
      
         
    </div>
  )
}

export default LiveChat