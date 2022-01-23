import {gql} from 'apollo-boost'

export const addNoteCategory = gql`
  mutation($userId:String, $title:String!, $color:String!){
    addNoteCategory(userId: $userId, title:$title, color:$color){
      title, color, userId
    }
  }
`