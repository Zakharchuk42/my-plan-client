import {gql} from 'apollo-boost'

export const delNoteMutation = gql `
  mutation delNote ($id: ID) {
    delNote (id: $id) {
      id
    }
  }
`

export const editNoteMutation = gql`
  mutation updateNote($id: ID, $title: String, $text: String){
    updateNote(id: $id, title: $title, text: $text) {
      title,
      text
    }
  }
`