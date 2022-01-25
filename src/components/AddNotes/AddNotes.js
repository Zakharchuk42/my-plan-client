import React from 'react'

import './AddNotes.scss'

const AddNotes = ({onClick}) => {
  return (
    <div className="AddNotes" onClick={onClick}>
      <div className="AddNotes__text">
        Add
      </div>
    </div>
  )
}

export default AddNotes