import React from 'react'
import DelNoteContent from '../DelNoteContent/DelNoteContent'
import EditNoteContent from '../EditNoteContent/EditNoteContent'
import stores from '../../store/stores'
import withHoc from './TodayNotesHoc'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faTrashCan, faPencil, faBookmark} from '@fortawesome/free-solid-svg-icons'

import './TodayNotes.scss'

const TodayNotes = ({title, text, delNote, editNote, endTime, startTime, color}) => {

  const {showModalStore} = stores

  return (
      <div className="TodayNotes"  onClick={()=>console.log('test')}>
        <div className="TodayNotes__header" >
          <FontAwesomeIcon icon={faBookmark} style={{color}}/>
          {title}
        </div>
        <div className="TodayNotes__footer">
          <div className="TodayNotes__reserve-time">
            <FontAwesomeIcon icon={faClock} />
            {`${startTime} - ${endTime}`}
          </div>
          <div className="TodayNotes__buttons">
            <FontAwesomeIcon
              className="TodayNotes__buttons-del"
              icon={faTrashCan}
              onClick={(e)=> {
                e.stopPropagation();
                showModalStore.openModal('Confirm to delete note', <DelNoteContent text={text} title={title}/>, delNote)
              }}/>
            <FontAwesomeIcon
              className="TodayNotes__buttons-edit"
              icon={faPencil}
              onClick={(e)=> {
                e.stopPropagation();
                showModalStore.openModal('Confirm to edit note',
                  <EditNoteContent
                    titleProps={title}
                    textProps={text}
                    startTimeProps={startTime}
                    endTimeProps={endTime}
                    colorProps={color}/>,
                  editNote)
              }}/>
          </div>
        </div>
      </div>
  )
}

export default withHoc(TodayNotes)