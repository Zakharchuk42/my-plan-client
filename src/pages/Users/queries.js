import {gql} from 'apollo-boost'

export const allUsersQueries = gql `
  query allUsersQueries {
    getAllUsers {
      id
      username
      avatar
      age
      sex
      goal
    }
  }
`