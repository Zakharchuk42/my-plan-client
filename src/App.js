import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter} from 'react-router-dom'

import MainScreen from './components/MainScreen/MainScreen'
import ModalWindow from './components/ModalWindow/ModalWindow'

// const client = new ApolloClient({
//   uri: `https://myplan-server.herokuapp.com/graphql`
// })

const client = new ApolloClient({
  uri: `http://localhost:2020/graphql`
})

function App() {


  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <MainScreen/>
        <ModalWindow />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
