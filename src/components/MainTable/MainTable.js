import React from 'react'
import Header from '../Header/Header'
import {Route, Routes} from 'react-router-dom'
import Notes from '../../pages/Notes/Notes'
import Users from '../../pages/Users/Users'
import Home from '../../pages/Home/Home'

import './MainTable.scss'

const MainTable = () => {
  return(
    <>
      <Header />
      <div className="MainTable">
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/all-notes'} element={<Notes/>}/>
          <Route path={'/all-users'} element={<Users/>}/>
        </Routes>
      </div>
    </>
  )
}

export default MainTable;

