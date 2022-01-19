import {compose} from 'recompose'
import {graphql} from 'react-apollo'

import {allUsersQueries} from './queries'

export default compose(graphql(allUsersQueries))