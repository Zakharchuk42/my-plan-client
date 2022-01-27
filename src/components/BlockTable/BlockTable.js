import React from 'react'

import './BlockTable.scss'

const BlockTable = ({children}) => {
  return (
    <div className="BlockTable">
      {children}
    </div>
  )
}

export default BlockTable