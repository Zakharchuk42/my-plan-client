import {compose} from 'recompose'
import {graphql} from 'react-apollo'

import {delNoteMutation, editNoteMutation} from './mutation'
import {allNotesQueries} from '../../pages/Notes/queries'

const withGraphQl = compose(
  graphql(delNoteMutation, {
    props: ({mutate}) => ({
      delNote: id => mutate({
        variables: id,
        refetchQueries: [{query: allNotesQueries}],
      })
    })
  }),
  graphql(editNoteMutation, {
    props: ({mutate}) => ({
      editNote: note => mutate({
        variables: note,
        refetchQueries: [{query: allNotesQueries}],
      })
    })
  })
)


export default withGraphQl