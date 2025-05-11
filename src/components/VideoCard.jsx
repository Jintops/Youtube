import React from 'react'

const VideoCard = ({ info }) => {
   
    if (!info || !info.snippet) return null;
    const { snippet ,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className="rounded-lg"alt='thumnails' src={thumbnails.medium.url}></img>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
      
    </div>
  )
}

export default VideoCard
