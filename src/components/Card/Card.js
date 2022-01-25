import React from 'react'
import withGraphQl from './CardHoc'
import DelNoteContent from '../DelNoteContent/DelNoteContent'
import EditNoteContent from '../EditNoteContent/EditNoteContent'
import stores from '../../store/stores'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons'

import './Card.scss'

const Card = ({title, text, delNote, editNote, startTimeProps, endTimeProps, colorProps}) => {
  const {showModalStore} = stores

  return(
    <div className="Card" >
      <div className="Card__title" style={{background: colorProps ? colorProps : '#183153'}}>
        {title}
      </div>
      <div className="Card__text">
        {text}
      </div>
      <div className="Card__footer">
        <div className="Card__time">
          <FontAwesomeIcon icon={faClock} />
          {`${startTimeProps} - ${endTimeProps}`}
        </div>
        <div className="Card__func-button">
          <FontAwesomeIcon
            className="TodayNotes__buttons-del"
            icon={faTrashCan}
            onClick={(e)=> {
              showModalStore.openModal('Confirm to delete note', <DelNoteContent text={text} title={title}/>, delNote)
            }}/>
          <FontAwesomeIcon
            className="TodayNotes__buttons-edit"
            icon={faPencil}
            onClick={(e)=> {
              showModalStore.openModal('Confirm to edit note', <EditNoteContent
                textProps={text}
                titleProps={title}
                colorProps={colorProps}
                startTimeProps={startTimeProps}
                endTimeProps={endTimeProps}/>, editNote)
            }}/>
        </div>
      </div>
    </div>
  )
}

export default withGraphQl(Card)
