import React from 'react'
import {NavLink} from 'react-router-dom'

import './Header.scss'

import gitHub from '../../img/github.svg'
import note from '../../img/note.svg'
import user from '../../img/user.svg'
import home from '../../img/home.svg'

const Header = () => {
  return (
    <div className='Header'>
      <nav className='Header__menu'>
        <NavLink className='Header__link' to="/" >
          <img src={home} alt='notes' />Home</NavLink>
        <NavLink className='Header__link' to="/all-notes" >
          <img src={note} alt='notes' />All notes</NavLink>
        <NavLink className='Header__link' to="/all-users" >
          <img src={user} alt='users' />All users</NavLink>
      </nav>
      <div className="Header__social">
        <a className='Header__social-link' href="https://github.com/Zakharchuk42" target="_blank" >
          <img src={gitHub} alt='Git Hub' />GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;