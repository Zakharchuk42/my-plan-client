import React from 'react'
import Navigation from '../Navigation/Navigation'
import Time from '../Time/Time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.scss'

const Sidebar = () => {

  return (
    <div className="Sidebar">
      <div className="Sidebar__time">
        <Time />
      </div>
      <div className="Sidebar__block">
        <div className="Sidebar__block-title">
          Menu
        </div>
        <div className="Sidebar__block-body">
          <Navigation />
        </div>
      </div>
      <div className="Sidebar__block">
        <div className="Sidebar__block-title">
          Today
        </div>
        <div className="Sidebar__block-body">
          <a className='Sidebar__social-link' href="https://github.com/Zakharchuk42/myplan" target="_blank" >
            <FontAwesomeIcon icon={faCodeBranch} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar