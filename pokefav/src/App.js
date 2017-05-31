import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator } from "react-navigation";

import PokeList from './components/PokeList'
import PokeFav from './components/PokeFav'

const App = TabNavigator({
  PokeList: { screen: PokeList},
  PokeFav: { screen: PokeFav}
})

export default App

