import ShowModalStore from './showModalStore'
import InputModalStore from './inputModalStore'
import UserStore from './userStore'

const stores = {
  showModalStore: new ShowModalStore(),
  inputModalStore: new InputModalStore(),
  userStore: new UserStore(),
}

export default stores