import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter} from 'react-router-dom'

import MainScreen from './components/MainTable/MainTable'
import ModalWindow from './components/ModalWindow/ModalWindow'

import './App.scss'

const client = new ApolloClient({
  uri: `http://myplan-server.herokuapp.com/graphql`
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
