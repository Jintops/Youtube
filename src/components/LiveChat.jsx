import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import photourl from '../utils/helper';
const LiveChat = () => {

const ChatMessages=useSelector(store=>store.chat.messages)

  const dispatch=useDispatch();

  useEffect(()=>{
      
    const i=setInterval(()=>{

  const randomImage = photourl[Math.floor(Math.random() * photourl.length)];

     dispatch(addMessage({name:generateRandomName(), 
        message:makeRandomMessage(15),
        image:randomImage}))
    },2000);

    return ()=>clearInterval(i);

  },[])

  return (
    <>
    <div className='border border-black mx-8 h-[750px] p-2 bg-slate-100 rounded-xl overflow-scroll flex flex-col-reverse'>
        <div>
        
        {
            ChatMessages.map((c)=>(
                 <ChatMessage name={c.name} message={c.message} image={c.image}/>
            ))
        }
      </div>
         
    </div>
    <div className=' p-2 mx-8 border border-black'>
      <input className='w-60' type='text'></input>
      <button className='px-2 mx-2 bg-green-100'>Send</button>
    </div>
    </>
  )
}

export default LiveChat