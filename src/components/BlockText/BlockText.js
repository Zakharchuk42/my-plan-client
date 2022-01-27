import React from 'react'

import './BlockText.scss'

const BlockText = ({children}) => {
  return (
    <div className="BlockText">
      {children}
    </div>
  )
}

export default BlockText