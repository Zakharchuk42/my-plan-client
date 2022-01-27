import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faHouse, faCalendar } from '@fortawesome/free-solid-svg-icons'

import {NavLink} from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <NavLink className='Navigation__link' to="/" >
        <FontAwesomeIcon icon={faHouse} className='Navigation__ico'/>
        Home
      </NavLink>
      <NavLink className='Navigation__link' to="/calendar" >
        <FontAwesomeIcon icon={faCalendar} className='Navigation__ico'/>
        Calendar
      </NavLink>
      <NavLink className='Navigation__link' to="/notes" >
        <FontAwesomeIcon icon={faBook}  className='Navigation__ico'/>
        Notes
      </NavLink>
    </nav>
  );
};

export default Navigation;