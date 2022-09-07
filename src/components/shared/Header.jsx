import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/header.css'

const Header = () => {
  return (
    <header className='red-rectangle-header'>
      <NavLink to='/' >
        <img className='header-img' src="/img/logo-pokedex.svg" alt="" />
      </NavLink>
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default Header