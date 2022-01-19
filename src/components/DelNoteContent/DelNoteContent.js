import React from 'react'

import './DelNoteContent.scss'

const DelNoteContent = ({text, title}) => {


  return (
    <div className="DelNoteContent">
      <div className="DelNoteContent__content">
        <div className="DelNoteContent__del-item">
          <div className="DelNoteContent__del-item-title">{title}</div>
          <div className="DelNoteContent__del-item-text">{text}</div>
        </div>
        <div className="DelNoteContent__text">
          If you click 'Confirm' this element will be removed from data base.
        </div>
      </div>
    </div>
  )
}

export default DelNoteContent