import React, {useEffect, useState} from 'react'
import {TextField} from '@mui/material'

import stores from '../../store/stores'

import './EditNoteContent.scss'
import SwitchColor from '../SwitchColor/SwitchColor'

const EditNoteContent = ({textProps, titleProps, startTimeProps, endTimeProps, colorProps}) => {

  const { inputModalStore } = stores

  const [title, setTitle] = useState(titleProps)
  const [text, setText] = useState(textProps)

  const [startTime, setStartTime] = useState(startTimeProps)
  const [endTime, setEndTime] = useState(endTimeProps)
  const [color, setColor] = useState(colorProps)

  const chooseColor = (e) => {
    setColor(e.target.value)
  }

  useEffect(()=>{
    inputModalStore.setFormText({color, title, endTime, text, startTime})
  })


  return (
    <div className="EditNoteContent">
      <form className="Form" noValidate autoComplete="off">
        <TextField
          label="Title"
          className="NoteAddForm__input"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setTitle(e.target.value)}}
          fullWidth
          value={title}
        />
        <TextField
          className="AddFormContent__clock"
          label="Start time"
          type="time"
          margin="normal"
          onChange={(e)=>{setStartTime(e.target.value)}}
          value={startTime}
          sx={{ mr: 2, width: 150 }}
        />
        <TextField
          className="AddFormContent__clock"
          label="End time"
          type="time"
          margin="normal"
          onChange={(e)=>{setEndTime(e.target.value)}}
          value={endTime}
          sx={{ mr: 2, width: 150 }}
          />
        <SwitchColor color={color} chooseColor={chooseColor}/>
        <TextField
          multiline
          rows={4}
          label="Text"
          className="NoteAddForm__input NoteAddForm__text-area"
          type="text"
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setText(e.target.value)}}
          value={text}
          fullWidth
        />
      </form>
    </div>
  )
}

export default EditNoteContent