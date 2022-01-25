import {compose} from "recompose"
import {graphql} from "react-apollo"

import {addNoteCategory, delNoteCategoryMutation} from './mutation'
import {getNoteCategory} from './queries'

const withGraphQl = compose(
  graphql(getNoteCategory),
  graphql(delNoteCategoryMutation, {
    props: ({mutate}) => ({
      delNoteCategory: id => mutate({
        variables: id,
        refetchQueries: [{ query: getNoteCategory}],
      })
    })
  }),
  graphql(addNoteCategory, {
    props: ({mutate}) => ({
      addNoteCategory: noteCategory => mutate ({
        variables: noteCategory,
        refetchQueries: [{ query: getNoteCategory}],
      })
    })
  }),
)

export default withGraphQl