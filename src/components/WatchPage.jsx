import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
   const [searchParams]=useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className='flex flex-col'>
        <div className='px-20 p-2'>
          <iframe className='rounded-xl' width="900" height="550" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <CommentsContainer/>
        </div>
    )
}

export default WatchPage
