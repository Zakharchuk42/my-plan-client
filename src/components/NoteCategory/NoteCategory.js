import React, {useState} from 'react'

import SwitchColor from '../SwitchColor/SwitchColor'
import {TextField} from '@mui/material'
import Button from '../Button/Button'
import withHoc from './NoteCategoryHoc'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import BlockHeader from '../BlockHeader/BlockHeader'
import BlockTable from '../BlockTable/BlockTable'

import './NoteCategory.scss'
import Loader from '../Loader/Loader'

const NoteCategory = ({data, addNoteCategory, delNoteCategory}) => {
  const {getUser={}, loading} = data

  const [color, setColor] = useState('#183153')
  const [category, setCategory] = useState('')

  const addCategory = () => {
    addNoteCategory({title: category, color: color, userId: "61ec05197ff837bb7e468dd2"})
    setCategory('')
    setColor('#183153')
  }

  const delCategory = (id) => {
    delNoteCategory({id})
  }


  const chooseColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="NoteCategory">
      <BlockHeader>
        <div className="NoteCategory__title">
          My category
        </div>
      </BlockHeader>
      <BlockTable>
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
          {loading ? (
            <div className="NoteCategory__loader">
              <Loader />
            </div>
          ) : (
            getUser.noteCategory.map((category) => {
              return (
                <div className="NoteCategory__currency-list" key={category.id}>
                  <div className="NoteCategory__currency-color" style={{background:  category.color}}> </div>
                  <div className="NoteCategory__currency-category">{category.title}</div>
                  <div className="NoteCategory__button">
                    <FontAwesomeIcon
                      className="NoteCategory__buttons-del"
                      icon={faTrashCan}
                      onClick={()=>delCategory(category.id)}/>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </BlockTable>
    </div>
  )
}

export default withHoc(NoteCategory)