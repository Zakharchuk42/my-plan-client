import {compose} from "recompose"
import {graphql} from "react-apollo"
import {addNoteMutation} from './mutation'

import {allNotesQueries} from './queries'

const withGraphQl = compose(
  graphql(allNotesQueries),
  graphql(addNoteMutation, {
    props: ({mutate}) => ({
      addNote: note => mutate ({
        variables: note,
        refetchQueries: [{ query: allNotesQueries}]
      })
    })
  })
)

export default withGraphQl