import React, {useState} from 'react'
import moment from 'moment'
import withHoc from './CalendarHoc'
import CalendarWeek from '../../components/CalendarWeek/CalendarWeek'
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader'
import CalendarCell from '../../components/CalendarCell/CalendarCell'
import NoteCategory from '../../components/NoteCategory/NoteCategory'
import Weather from '../../components/Weather/Weather'
import Loader from '../../components/Loader/Loader'

import './Calendar.scss'

const Calendar = ({addNote, data}) => {
  moment.updateLocale('en', {week: {dow: 1}})

  const { getUser={}, loading} = data

  const [today, setToday] = useState(moment())

  const startDay = today.clone().startOf('month').startOf('week')
  const day = startDay.clone().subtract(1, 'day')
  const totalDaysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'))
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))

  return (
    <>
      <div className='Calendar'>
        <CalendarHeader
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}/>
        <CalendarWeek />
        {
          loading ? (
            <div className="Calendar__loader">
              <Loader />
            </div>
          ) : (
            <div className="Calendar__table">
              {
                totalDaysArray.map((dayItem)=>{
                  return(
                    <CalendarCell
                      key={dayItem.unix()}
                      today={today}
                      dayItem={dayItem}
                      addNote={addNote}
                      getUser={getUser}
                    />
                  )
                })
              }
            </div>
          )
        }
      </div>
      <div className='Calendar__footer'>
        <NoteCategory />
        <Weather />
      </div>
    </>
  )
}

export default withHoc(Calendar)