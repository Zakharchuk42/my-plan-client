import React from 'react'

import AddButton from '../../components/AddButton/AddButton'
import Card from '../../components/Card/Card'
import withHoc from './NotesHoc'

import  './Notes.scss'

const Notes = ({data, addNote}) => {

  const {getUser = [], loading} = data

  return(
    <div className="Notes">
      {
        loading ?  ('LOADING') : (
        <div className="Notes__list" >
            {getUser.userNotes.map((note) => {
              return (
                <Card
                key={note.id}
                title={note.title}
                text={note.text}
                id={note.id}
                time={note.time}
                />
              )
            })}
        </div>
        )
      }
      <AddButton addNote={addNote} />
    </div>

  )
}

export default withHoc(Notes);

