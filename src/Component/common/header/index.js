import React from 'react'
import './header.css'
import profile from '../../../img/profile.jpg'

function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
      <i class="fi fi-br-grid"></i>
      </div>
      <div className='header-leftFold'>
        <label className='header-label'>Microsoft Teams</label>
      </div>
      <div className='header-rightFold'>
        <div className='header-search'>
          <i class="fi-rr-search"></i>
          <input placeholder='Search' />
        </div>
        <div className='header-profile'>
          <div className='option'></div>
          <i class="fi fi-rr-menu-dots"></i>
        </div>
        <img className='Avatar' src={profile} alt='profile'></img>
      </div>
    </div>
  )
}

export default Header