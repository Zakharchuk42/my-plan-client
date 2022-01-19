import {makeAutoObservable} from 'mobx'

class InputModalStore {

  formText = {
    title: '',
    text: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFormText(title, text) {
    this.formText = {
      title,
      text,
    }
  }

}

export default InputModalStore