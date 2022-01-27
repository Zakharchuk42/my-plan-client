import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import './AddNotes.scss'

const AddNotes = ({onClick}) => {
  return (
    <div className="AddNotes" onClick={onClick}>
      <div className="AddNotes__ico">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}

export default AddNotes