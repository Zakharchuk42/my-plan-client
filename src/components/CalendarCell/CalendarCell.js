import React from 'react'

import AddNoteContent from '../AddNoteContent/AddNoteContent'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import stores from '../../store/stores'

import './CalendarCell.scss'

const CalendarCell = ({today, dayItem, addNote, getUser}) => {

  const {showModalStore} = stores

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => today.isSame(day, 'month');

  const weekday = dayItem.day() === 6 || dayItem.day() === 0 ? 'CalendarCell__weekday' : ''
  const month = isSelectedMonth(dayItem) ? 'CalendarCell__month' : ''
  const day = isCurrentDay(dayItem) ? 'CalendarCell__day_active' : ''
  const add = isSelectedMonth(dayItem) ? '' : 'CalendarCell__add_month'

  const startDay = dayItem.startOf('day').format('x')

  return (
    <div
      className={`CalendarCell ${weekday} ${month}`}
      onClick={()=>console.log('Open day')}>
      <div className="CalendarCell__notes">
        {getUser.userNotes.map((note)=>{
          if(note.day === startDay){
            return <div className="CalendarCell__note" key={note.time}> </div>
          }
        })}
      </div>
      <div className="CalendarCell__content">
        <div className={`CalendarCell__day ${day}`}>
          <span>{dayItem.format('D')}</span>
        </div>
        <div className={`CalendarCell__add ${add}`}
             onClick={(e)=> {
               e.stopPropagation();
               showModalStore.openModal('Add new note', <AddNoteContent day={dayItem.format('x')} />, addNote)
             }}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  )
}

export default CalendarCell