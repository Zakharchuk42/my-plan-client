import {gql} from 'apollo-boost'

export const addNoteMutation = gql`
mutation addNote ($title: String, $text: String, $time: String, $userId: String, $day: String, $startTime: String, $endTime: String, $color: String) {
  addNote(title: $title, text: $text, time: $time, userId: $userId, day: $day startTime: $startTime, endTime: $endTime, color: $color) {
    title
    text
    time
    userId
    day
    startTime
    endTime
    color
  }
}
`