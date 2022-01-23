import {compose} from "recompose"
import {graphql} from "react-apollo"
import {addNoteCategory} from './mutation'
import {getNoteCategory} from './queries'

const withGraphQl = compose(
  graphql(getNoteCategory),
  graphql(addNoteCategory, {
    props: ({mutate}) => ({
      addNoteCategory: noteCategory => mutate ({
        variables: noteCategory,
        refetchQueries: [{ query: getNoteCategory}],
      })
    })
  })
)

export default withGraphQl