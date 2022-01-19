import {gql} from 'apollo-boost'

export const addNoteMutation = gql`
  mutation addNote ($title: String!, $text: String, $time: String) {
    addNote(title: $title, text: $text, time: $time) {
      title
      text
      time
    }
  }
`