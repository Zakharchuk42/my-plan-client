import {gql} from 'apollo-boost'

export const delNoteMutation = gql `
  mutation delNote ($id: ID) {
    delNote (id: $id) {
      id
    }
  }
`

export const editNoteMutation = gql`
  mutation updateNote($id: ID, $title: String, $text: String, $startTime: String, $endTime: String, $color: String){
    updateNote(id: $id, title: $title, text: $text, startTime: $startTime, endTime: $endTime, color: $color) {
      title
      text
      startTime
      endTime
      color
    }
  }
`