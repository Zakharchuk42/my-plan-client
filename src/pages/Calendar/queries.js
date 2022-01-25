import {gql} from 'apollo-boost'

export const allNotesQueries = gql`
  query allNotesQuery {
    getUser(id: "61ec05197ff837bb7e468dd2") {
      userNotes {
        title
        text
        time
        id
        day
        startTime
        endTime
        color
      },
      noteCategory {
        title
        color
      }
    }
  }
`