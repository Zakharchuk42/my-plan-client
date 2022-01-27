import React, {useEffect, useState} from 'react'
import moment from 'moment'
import withHoc from './NotesHoc'
import NotesDay from '../../components/NotesDay/NotesDay'
import stores from '../../store/stores'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarWeek, faPlay, faSquareCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router'

import  './Notes.scss'
import BlockHeader from '../../components/BlockHeader/BlockHeader'

const Notes = ({data, addNote}) => {
  moment.updateLocale('en', {week: {dow: 1}})

  const {inputModalStore} = stores
  const weekNow = inputModalStore.week.week

  useEffect(()=>{
    if(weekNow) {
      setToday(weekNow)
    }
  }, [])

  const navigate = useNavigate()

  const [today, setToday] = useState(moment())

  const startWeek = today.clone().startOf('week')
  const day = startWeek.clone().subtract(1, 'day')

  const weekArray = [...Array(7)].map(()=>day.add(1, 'day').clone())

  const goBack = () => {
    navigate('/calendar')
  }

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'week'))
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'week'))

  return(
    <div className="Notes">
      <BlockHeader >
        <div className="Notes__back"
        onClick={()=>goBack()}>
          <FontAwesomeIcon icon={faSquareCaretLeft} /> Calendar
        </div>
        <div className="Notes__handler">
          <div className="Notes__handler_prev" onClick={()=>prevHandler()}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="Notes__handler_today" onClick={()=>todayHandler()}>
            <FontAwesomeIcon icon={faCalendarWeek} />
          </div>
          <div className="Notes__handler_next" onClick={()=>nextHandler()}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      </BlockHeader>
      {weekArray.map((singleDay) => {
        return (
          <NotesDay
            key={singleDay.unix()}
            singleDay={singleDay}
            data={data}
            addNote={addNote}
          >
          </NotesDay>
        )
      })}
    </div>

  )
}

export default withHoc(Notes)

