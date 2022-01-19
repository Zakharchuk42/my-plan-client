import {React, useState} from 'react'
import {TextField} from '@mui/material'

import stores from '../../store/stores'

import './AddNoteContent.scss'

const AddNoteContent = () => {

  const { inputModalStore } = stores

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  inputModalStore.setFormText(title, text)

  return (
    <div className="AddFormContent">
      <form className="AddFormContent__form" noValidate autoComplete="off">
        <TextField
          label="Title"
          className="AddFormContent__input"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setTitle(e.target.value)}}
          fullWidth
          value={title}
        />
        <TextField
          multiline
          rows={4}
          label="Text"
          className="AddFormContent__input AddFormContent__text-area"
          type="text"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setText(e.target.value)}}
          value={text}
        />
      </form>
    </div>
  )
}

export default AddNoteContent