import {makeAutoObservable} from 'mobx'

class ShowModalStore {
  isShow = false

  information = {
    title: '',
    content: '',
    func: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  openModal(title, content, func) {
    this.isShow = true

    this.information = {
      title,
      content,
      func,
    }
  }

  closeModal() {
    this.isShow = false
  }

}

export default ShowModalStore