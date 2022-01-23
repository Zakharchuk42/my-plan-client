import {compose} from "recompose"
import {graphql} from "react-apollo"

import {allNotesQueries} from './queries'

const withGraphQl = compose(graphql(allNotesQueries))

export default withGraphQl