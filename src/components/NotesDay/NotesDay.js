import React from 'react'
import Card from '../../components/Card/Card'
import AddNotes from '../AddNotes/AddNotes'
import AddNoteContent from '../AddNoteContent/AddNoteContent'

import stores from '../../store/stores'

import './NotesDay.scss'

const NotesDay = ({singleDay, data, addNote}) => {

  const {getUser = [], loading} = data
  const {showModalStore} = stores

  const notesDay = `${singleDay.format('dddd')} ${singleDay.format('D')}, ${singleDay.format('MMM')}`
  const startDay = singleDay.startOf('day').format('x')

  return (
    <div className="NotesDay">
      <div className="NotesDay__header">
        {notesDay}
      </div>
      <div className="NotesDay__notes">
        {
          loading ?  ('LOADING') : (
          <div className="Notes__list" >
              {getUser.userNotes.map((note) => {
                if(note.day === startDay) {
                  return (
                    <Card
                      key={note.id}
                      title={note.title}
                      text={note.text}
                      id={note.id}
                      startTimeProps={note.startTime}
                      endTimeProps={note.endTime}
                      colorProps={note.color}
                    />
                  )
                }
              })}
            <AddNotes onClick={()=>showModalStore.openModal('Add new note', <AddNoteContent day={singleDay.format('x')}/>, addNote)}/>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default NotesDay