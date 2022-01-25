import React, {useEffect, useState} from 'react'
import {TextField} from '@mui/material'

import stores from '../../store/stores'

import './AddNoteContent.scss'
import SwitchColor from '../SwitchColor/SwitchColor'

const AddNoteContent = ({day}) => {
  const { inputModalStore, userStore } = stores

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [color, setColor] = useState('#183153')

  const chooseColor = (e) => {
    setColor(e.target.value)
  }

  const userId = userStore.userId


  useEffect(()=>{
    inputModalStore.setFormText({title, text, color, startTime, endTime, userId, day})
  })


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
          className="AddFormContent__clock"
          label="Start time"
          type="time"
          margin="normal"
          onChange={(e)=>{setStartTime(e.target.value)}}
          value={startTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ mr: 2, width: 150 }}
        />
        <TextField
          className="AddFormContent__clock"
          label="End time"
          type="time"
          margin="normal"
          onChange={(e)=>{setEndTime(e.target.value)}}
          value={endTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ mr: 2, width: 150 }}
        />
          <SwitchColor color={color} chooseColor={chooseColor}/>
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