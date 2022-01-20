import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import MainScreen from './components/MainTable/MainTable'
import ModalWindow from './components/ModalWindow/ModalWindow'

// const client = new ApolloClient({
//   uri: `http://myplan-server.herokuapp.com/graphql`
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
