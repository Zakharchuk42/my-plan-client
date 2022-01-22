import React, {useState} from 'react'
import moment from 'moment'

import './Calendar.scss'

const Calendar = () => {
  moment.updateLocale('en', {week: {dow: 1}})

  const [today, setToday] = useState(moment())

  const startDay = today.clone().startOf('month').startOf('week');
  const day = startDay.clone().subtract(1, 'day');
  const totalDaysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => today.isSame(day, 'month');


  return (
    <div className='Calendar'>
      <div className="Calendar__header">
        {today.format('MMMM YYYY')}
        <div onClick={()=>prevHandler()}>
          tuda
        </div>
        <div onClick={()=>todayHandler()}>
          TODAY
        </div>
        <div onClick={()=>nextHandler()}>
          suda
        </div>
      </div>
      <div className="Calendar__weekdays">
        {}
      </div>
      <div className="Calendar__table">
        {totalDaysArray.map((dayItem, index) => {

          const weekday = dayItem.day() === 6 || dayItem.day() === 0 ? 'Calendar__cell_weekday' : ''

            return (
              <div key={dayItem.unix()}
                   className={`Calendar__cell ${weekday}`}
              >
                {
                  isCurrentDay(dayItem) ? (
                    <div className='Calendar__day'>
                      <span>{dayItem.format('D')}</span>
                    </div>
                  ) : (
                    <span>{dayItem.format('D')}</span>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar