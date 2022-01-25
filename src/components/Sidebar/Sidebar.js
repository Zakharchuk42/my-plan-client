import React from 'react'
import moment from 'moment'
import Navigation from '../Navigation/Navigation'
import Time from '../Time/Time'
import TodayNotes from '../TodayNotes/TodayNotes'
import withHoc from '../Sidebar/SidebarHoc'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.scss'

const Sidebar = ({data}) => {

  const {getUser={}, loading} = data

  const today = moment().startOf('day').format('x')

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
          { loading ?  ('LOADING') :
            (getUser.userNotes.map((note)=>{
              if(note.day === today) {
               return (
                   <TodayNotes
                     key={note.id}
                     title={note.title}
                     text={note.text}
                     id={note.id}
                     startTime={note.startTime}
                     endTime={note.endTime}
                     color={note.color}
                   />
                  )
                }
            }))
          }
          <a className='Sidebar__social-link' href="https://github.com/Zakharchuk42/myplan" target="_blank" >
            <FontAwesomeIcon icon={faCodeBranch} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default withHoc(Sidebar)