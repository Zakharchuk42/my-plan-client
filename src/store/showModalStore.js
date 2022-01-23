import {makeAutoObservable} from 'mobx'

class ShowModalStore {
  isShow = false

  information = {
    title: '',
    content: '',
    func: '',
    day: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  openModal(title, content, func, day) {
    this.isShow = true

    this.information = {
      title,
      content,
      func,
      day,
    }
  }

  closeModal() {
    this.isShow = false
  }

}

export default ShowModalStore