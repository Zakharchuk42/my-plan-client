import React, {useState} from 'react'

import SwitchColor from '../SwitchColor/SwitchColor'
import {TextField} from '@mui/material'
import Button from '../Button/Button'
import withHoc from './NoteCategoryHoc'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons'

import './NoteCategory.scss'

const NoteCategory = ({data, addNoteCategory}) => {

  const {getUser={}, loading} = data

  const [color, setColor] = useState('#ffffff')
  const [category, setCategory] = useState('')

  const addCategory = () => {
    addNoteCategory({title: category, color: color, userId: "61ec05197ff837bb7e468dd2"})
    setCategory('')
    setColor('#ffffff')
  }

  const chooseColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="NoteCategory">
      <div className="NoteCategory__header">
        <div className="NoteCategory__title">
          My category
        </div>
      </div>
      <div className="NoteCategory__table">
        <div className="NoteCategory__add-block">
          <div className="NoteCategory__color">
            <SwitchColor color={color} chooseColor={chooseColor}/>
          </div>
          <div className="NoteCategory__text">
            <TextField
              label="Category"
              variant="outlined"
              onChange={(e)=>{setCategory(e.target.value)}}
              value={category} />
          </div>
          <div className="NoteCategory__button">
            <Button onClick={addCategory}> Add </Button>
          </div>
        </div>
        <div className="NoteCategory__list-category">
          {loading ? ('LOADING') : (
            getUser.noteCategory.map((category) => {
              return (
                <div className="NoteCategory__currency-list" key={category.id}>
                  <div className="NoteCategory__currency-color" style={{background:  category.color}}> </div>
                  <div className="NoteCategory__currency-category">{category.title}</div>
                  <div className="NoteCategory__button">
                    <FontAwesomeIcon
                      className="NoteCategory__buttons-del"
                      icon={faTrashCan}
                      onClick={(e)=> {
                        console.log('del')
                      }}/>
                    <FontAwesomeIcon
                      className="NoteCategory__buttons-edit"
                      icon={faPencil}
                      onClick={(e)=> {
                        console.log('edit')
                      }}/>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default withHoc(NoteCategory)