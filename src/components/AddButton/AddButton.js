import React from 'react'
import {observer} from 'mobx-react-lite'

import stores from '../../store/stores'
import AddNoteContent from '../AddNoteContent/AddNoteContent'

import './AddButton.scss'

import plus from '../../img/plus.svg'

const AddButton = observer(({addNote}) => {

  const {showModalStore} = stores

  const toggleModal = showModalStore.isShow ? () => showModalStore.closeModal() : () => showModalStore.openModal('Add new note', <AddNoteContent />, addNote)

  const activeClass = showModalStore.isShow ? "AddButton__img_active" : ''

  return(
    <div className="AddButton"
         onClick={toggleModal}
    >
      <img className={`AddButton__img ${activeClass}`} src={plus} alt="plus" />
    </div>
  )
})

export default AddButton