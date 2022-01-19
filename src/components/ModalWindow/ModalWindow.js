import React from 'react'
import {observer} from 'mobx-react-lite'
import stores from '../../store/stores'
import Button from '../Button/Button'

import plus from '../../img/plus.svg'

import './ModalWindow.scss'

const ModalWindow = observer(() => {

  const {showModalStore, inputModalStore} = stores

  const confirm = () => {
    showModalStore.information.func({title: inputModalStore.formText.title, text: inputModalStore.formText.text, time: `${new Date().getTime()}`})
    showModalStore.closeModal()
  }

  const activeClass =  showModalStore.isShow ? 'ModalWindow_active' : ''

  return(
    <div className={`ModalWindow ${activeClass}`}>
      <div className="ModalWindow__window">
        <div className="ModalWindow__header">
          <div className="ModalWindow__title">
            {showModalStore.information.title}
          </div>
          <div className="ModalWindow__close" onClick={()=>showModalStore.closeModal()}>
            <img src={plus} alt='close' />
          </div>
        </div>
        <div className="ModalWindow__body">
          {showModalStore.information.content}
        </div>
        <div className="ModalWindow__buttons">
          <div className="ModalWindow__close-btn">
            <Button onClick={()=>showModalStore.closeModal()}>
              Close
            </Button>
          </div>
          <div  className="ModalWindow__confirm">
            <Button onClick={()=>confirm()}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default ModalWindow