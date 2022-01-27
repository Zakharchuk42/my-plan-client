import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import DelNoteContent from '../DelNoteContent/DelNoteContent'
import EditNoteContent from '../EditNoteContent/EditNoteContent'
import stores from '../../store/stores'

import './BlockFooter.scss'

const BlockFooter = ({title, text, delNote, editNote, endTime, startTime, color}) => {

  const {showModalStore} = stores

  return (
    <div className="BlockFooter">
      <div className="BlockFooter__reserve-time">
        <FontAwesomeIcon icon={faClock} />
        {`${startTime} - ${endTime}`}
      </div>
      <div className="BlockFooter__buttons">
        <FontAwesomeIcon
          className="BlockFooter__buttons-del"
          icon={faTrashCan}
          onClick={(e)=> {
            e.stopPropagation();
            showModalStore.openModal('Confirm to delete note', <DelNoteContent text={text} title={title}/>, delNote)
          }}/>
        <FontAwesomeIcon
          className="BlockFooter__buttons-edit"
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
  )
}

export default BlockFooter