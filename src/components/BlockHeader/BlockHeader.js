import React from 'react'

import './BlockHeader.scss'

const BlockHeader = ({children}) => {
  return (
    <div className="BlockHeader">
      {children}
    </div>
  )
}

export default BlockHeader