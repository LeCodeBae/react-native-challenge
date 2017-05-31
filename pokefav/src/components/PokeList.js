import React, { Component } from 'react'
import { Content, List, ListItem, Thumbnail, Text, Body, Left, Icon, Right } from 'native-base';
import { connect } from 'react-redux'

import { fetchPokemons } from '../actions'

export class PokeList extends Component {
  componentDidMount(){
    this.props.fetchPokemons()
  }
  render(){
    return (
      <Content>
        <List>
          {this.props.pokemons.map(pokemon=>
            <ListItem avatar key={pokemon.id}>
                <Left>
                  <Thumbnail source={{uri: 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + ('000' + pokemon.id.toString()).substr(-3) + '.png'}} />
                </Left>
                <Body>
                  <Text>{pokemon.name}</Text>
                </Body>
                <Right>
                  <Icon name="star" />
                </Right>
            </ListItem>
          )}
        </List>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPokemons: () => {
      return dispatch(fetchPokemons())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)