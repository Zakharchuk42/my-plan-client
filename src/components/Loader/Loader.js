import React from 'react'

import './Loader.scss'

const Loader = ({white}) => {

  const color = white ? 'Loading__arc_white' : 'Loading__arc_dark'

  return (
    <div className="Loading">
      <div className={`Loading__arc ${color}`}> </div>
      <div className={`Loading__arc ${color}`}> </div>
      <div className={`Loading__arc ${color}`}> </div>
    </div>
  )
}

export default Loader