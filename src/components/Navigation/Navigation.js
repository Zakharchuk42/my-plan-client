import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faHouse } from '@fortawesome/free-solid-svg-icons'

import {NavLink} from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <NavLink className='Navigation__link' to="/" >
        <FontAwesomeIcon icon={faHouse} className='Navigation__ico'/>
        Home
      </NavLink>
      <NavLink className='Navigation__link' to="/notes" >
        <FontAwesomeIcon icon={faBook}  className='Navigation__ico'/>
        Notes
      </NavLink>
      <NavLink className='Navigation__link' to="/users" >
        <FontAwesomeIcon icon={faUser}  className='Navigation__ico'/>
        Users
      </NavLink>
    </nav>
  );
};

export default Navigation;