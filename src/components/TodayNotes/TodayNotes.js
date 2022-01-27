import React from 'react'
import withHoc from './TodayNotesHoc'
import BlockFooter from '../BlockFooter/BlockFooter'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

import './TodayNotes.scss'

const TodayNotes = ({title, text, delNote, editNote, endTime, startTime, color}) => {

  return (
      <div className="TodayNotes"  onClick={()=>console.log('test')}>
        <div className="TodayNotes__header" >
          <FontAwesomeIcon icon={faBookmark} style={{color}}/>
          {title}
        </div>
        <div className="TodayNotes__footer">
          <BlockFooter
            color={color}
            title={title}
            text={text}
            delNote={delNote}
            editNote={editNote}
            endTime={endTime}
            startTime={startTime}/>
        </div>
      </div>
  )
}

export default withHoc(TodayNotes)