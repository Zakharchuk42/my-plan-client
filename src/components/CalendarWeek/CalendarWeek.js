import React from 'react'
import moment from 'moment'

import './CalendarWeek.scss'

const CalendarWeek = () => {
  return (
    <div className="CalendarWeek">
      {
        [...Array(7)].map((_, i) => (
          <div
            key={moment().day(i+1).format('ddd')}
            className="CalendarWeek__weekday">
            {moment().day(i+1).format('ddd')}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarWeek;