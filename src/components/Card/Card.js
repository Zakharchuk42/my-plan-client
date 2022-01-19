import React from 'react'
import withGraphQl from './CardHoc'
import IcoTrash from '../../img/svgCollection/IcoTrash'
import IcoPencil from '../../img/svgCollection/IcoPencil'
import DelNoteContent from '../DelNoteContent/DelNoteContent'
import EditNoteContent from '../EditNoteContent/EditNoteContent'
import stores from '../../store/stores'

import './Card.scss'

const Card = ({title, text, time, delNote, editNote}) => {
  const {showModalStore} = stores

  const now = new Date(Number(time))
  const hr = now.getHours()
  const min = now.getMinutes()
  const date = now.getDate()
  const mnt = now.getMonth() + 1
  const yr = now.getFullYear()

  const fullDate = `${date}.${Number(mnt) < 10 ? `0${mnt}` : mnt}.${yr} ${hr}:${Number(min) < 10 ? `0${min}` : min}`

  const delNoteContent = <DelNoteContent text={text} title={title}/>
  const editNoteContent = <EditNoteContent text={text} title={title}/>
  return(
    <div className="Card">
      <div className="Card__title">
        {title}
      </div>
      <div className="Card__text">
        {text}
      </div>
      <div className="Card__footer">
        <div className="Card__time">
          {fullDate}
        </div>
        <div className="Card__func-button">
          <div
            onClick={()=>showModalStore.openModal('Confirm to delete note', delNoteContent, delNote)}
            className="Card__del">
            <IcoTrash classes={'Card__del-img'}/>
          </div>
          <div onClick={()=>showModalStore.openModal('Confirm to edit note', editNoteContent, editNote)}
               className="Card__edit">
            <IcoPencil classes={'Card__edit-img'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withGraphQl(Card)
