import {makeAutoObservable} from 'mobx'

class InputModalStore {

  formText = {
    title: '',
    text: '',
    userId: '',
    day: '',
    categoryColor: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFormText(title, text, userId, day, categoryColor) {
    this.formText = {
      title,
      text,
      userId,
      day,
      categoryColor,
    }
  }

}

export default InputModalStore