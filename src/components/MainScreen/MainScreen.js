import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import {Route, Routes} from 'react-router-dom'
import Notes from '../../pages/Notes/Notes'
import Home from '../../pages/Home/Home'
import Calendar from '../../pages/Calendar/Calendar'

import './MainScreen.scss'

const MainScreen = () => {
  return(
    <div className="MainTable">
      <div className="MainTable__sidebar">
        <Sidebar />
      </div>
      <div className="MainTable__content">
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/calendar'} element={<Calendar/>}/>
          <Route path={'/notes'} element={<Notes/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default MainScreen;

