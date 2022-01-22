import React, {useEffect, useState} from 'react'
import moment from 'moment'

import  './Time.scss'


const Time = () => {

  const nowDate = moment().format('dddd, D MMMM, YYYY')

  const [clock, setClock] = useState(new Date())

  useEffect(()=>{
    setInterval(()=>{
      setClock(new Date())
    }, 1000)
  }, [])

  return (
    <div className="Time">
      <div className="Time__time">
        {clock.toLocaleTimeString('en-GB',{ hour: 'numeric', minute: 'numeric', second: '2-digit'})}
      </div>
      <div className="Time__day">
        {nowDate}
      </div>
    </div>
  )
}

export default Time