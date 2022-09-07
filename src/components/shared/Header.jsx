import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/header.css'
import '/public/img/logo-pokedex.svg'

const Header = () => {
  return (
    <header className='red-rectangle-header'>
      <NavLink to='/' >
        <img className='header-img' src="/public/img/logo-pokedex.svg" alt="logo pokedex" />
      </NavLink>
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default Header