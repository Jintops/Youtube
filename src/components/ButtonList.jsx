import React from 'react'
import Button from './Button'

const list=["All","Gaming","Songs","Live","Soccer","Cricket","News","Cooking","Sports","Comedy","Football","JavaScript","Movies","Programming","Music"]
const ButtonList = () => {
  return (
    <div className='flex'>
    {
      list.map((item,index)=>
       <Button key={index} name={item} />
       
      )
    }
        
    </div> 
  )      
}

export default ButtonList
