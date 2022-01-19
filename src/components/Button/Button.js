import React from 'react'

import './Button.scss'

const Button = ({children, onClick}) => {
  return(
    <button onClick={()=>onClick()} className="Button">
      {children}
    </button>
  )
}

export default Button