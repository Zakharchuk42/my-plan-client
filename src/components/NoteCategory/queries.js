import {gql} from 'apollo-boost'

export const getNoteCategory = gql`
  query getNoteCategory{
    getUser(id: "61ec05197ff837bb7e468dd2") {
      noteCategory {
        id
        title
        color
      }
    }
  }
`