import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

    // if(!isMenuOpen) return null
  return !isMenuOpen ? null :(
    <div className='shadow-lg w-full p-5'>
        <ul className=''>
        <li className='mt-2'><Link to="/"> <FontAwesomeIcon icon={faHouse} className='mr-4 ' />Home</Link></li>
        <li className='mt-2'> Shorts</li>  
        <li className='mt-2'>Subscriptions</li>
        <li className='mt-2'>Live</li>
      </ul>
    
<hr className='mt-3 text-gray-500'></hr>
        <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li className='mt-2'>History</li>
        <li className='mt-2'>Playlists</li>
        <li className='mt-2'>Your Videos</li>
        <li className='mt-2'>Your courses</li>
        <li className='mt-2'>Watch Later</li>
        <li className='mt-2'> Liked Videos</li>
      </ul>
      <hr className='mt-3 text-gray-500'></hr>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li className='mt-2'>music</li>
        <li className='mt-2'>Sports</li>
        <li className='mt-2'>Games</li>
        <li className='mt-2'>Movies</li>
      </ul>
      <hr className='mt-3 text-gray-500'></hr>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='mt-2'>music</li>
        <li className='mt-2'>Sports</li>
        <li className='mt-2'>Gaming</li>
        <li className='mt-2'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
