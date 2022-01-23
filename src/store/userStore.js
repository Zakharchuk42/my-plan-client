import {makeAutoObservable} from 'mobx'

class UserStore {
  userId = '61ec05197ff837bb7e468dd2'

  noteCategory = {

  }


  constructor() {
    makeAutoObservable(this)
  }

  saveNoteCategory(newCategory){
    this.noteCategory = [newCategory]
  }

}

export default UserStore