import {makeAutoObservable} from 'mobx'

class InputModalStore {

  formText = {
    title: '',
    text: '',
    userId: '',
    day: '',
    color: '',
    startTime: '',
    endTime: '',
  }

  week = {
    week: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFormText({title, text, startTime, endTime, userId, day, color} ) {
    this.formText = {
      title,
      text,
      color,
      startTime,
      endTime,
      userId,
      day,
    }
  }

  openWeek = (week) => {
    this.week = {
      week
    }
  }

}

export default InputModalStore