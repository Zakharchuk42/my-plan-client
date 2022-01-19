import {gql} from 'apollo-boost'

export const allNotesQueries = gql`
  query allNotesQuery {
    getAllNotes {
      id
      title
      text
      time
    }
  }
`