import React, {useState} from 'react'
import {TextField} from '@mui/material'

import stores from '../../store/stores'

import './EditNoteContent.scss'

const EditNoteContent = ({text, title}) => {

  const { inputModalStore } = stores

  const [titleState, setTitleTitle] = useState(title)
  const [textState, setTextText] = useState(text)

  inputModalStore.setFormText(titleState, textState)

  return (
    <div className="EditNoteContent">
      <form className="Form" noValidate autoComplete="off">
        <TextField
          label="Title"
          className="NoteAddForm__input"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setTitleTitle(e.target.value)}}
          fullWidth
          value={titleState}
        />
        <TextField
          multiline
          rows={4}
          label="Text"
          className="NoteAddForm__input NoteAddForm__text-area"
          type="text"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setTextText(e.target.value)}}
          value={textState}
          fullWidth
        />
      </form>
    </div>
  )
}

export default EditNoteContent