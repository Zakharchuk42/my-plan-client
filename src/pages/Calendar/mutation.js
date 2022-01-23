import {gql} from 'apollo-boost'

export const addNoteMutation = gql`
  mutation addNote ($title: String, $text: String, $time: String, $userId: String, $day: String) {
    addNote(title: $title, text: $text, time: $time, userId: $userId, day: $day) {
      title
      text
      time
      userId
      day
    }
  }
`