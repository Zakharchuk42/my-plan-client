import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarWeek, faPlay} from '@fortawesome/free-solid-svg-icons'

import './CalendarHeader.scss'

const CalendarHeader = ({today, prevHandler, todayHandler, nextHandler}) => {

  return (
    <div className="CalendarHeader">
      <div className="CalendarHeader__month">
        {today.format('MMMM YYYY')}
      </div>
      <div className="CalendarHeader__handler">
        <div className="CalendarHeader__handler_prev" onClick={()=>prevHandler()}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="CalendarHeader__handler_today" onClick={()=>todayHandler()}>
          <FontAwesomeIcon icon={faCalendarWeek} />
        </div>
        <div className="CalendarHeader__handler_next" onClick={()=>nextHandler()}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </div>
  )
}

export default CalendarHeader;