import React, { Component } from 'react'
import { View } from 'react-native'
import { Container } from 'native-base'

import PokeList from './components/PokeList'

export class App extends Component {
  render(){
    return (
      <Container>
      <PokeList/>
      </Container>
    );
  }
}

export default App

