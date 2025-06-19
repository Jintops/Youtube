import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

    // if(!isMenuOpen) return null
  return !isMenuOpen ? null :(
    <div className='shadow-lg w-40 p-5'>
        <ul className=''>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
