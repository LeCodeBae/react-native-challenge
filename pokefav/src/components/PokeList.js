import React, { Component } from 'react'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Icon, Right } from 'native-base';
import { connect } from 'react-redux'

import { fetchPokemons, favoritePokemon, unfavoritePokemon } from '../actions'

export class PokeList extends Component {
  componentDidMount(){
    this.props.fetchPokemons()
  }
  
  handleFavorite(pokemon){
    if (pokemon.favorite === true){
      return (
        <Icon name="md-star" style={{fontSize: 27, color: 'black'}} onPress={()=>{this.props.unfavoritePokemon(pokemon)}}/>
      )
    } else {
      return (
        <Icon name="md-star-outline" style={{fontSize: 27, color: 'black'}} onPress={()=>{this.props.favoritePokemon(pokemon)}}/>
      )
    }
  }
  
  render(){
    return (
      <Container>
        <Content>
          <List 
          dataArray={this.props.pokemons.sort(function(a, b) {
            return (a.id - b.id);
          })}
          renderRow={(pokemon)=>
            <ListItem icon key={pokemon.id}>
                <Left>
                  <Thumbnail source={{ uri: 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + ('000' + pokemon.id.toString()).substr(-3) + '.png' }}/>
                </Left>
                <Body>
                  <Text>{pokemon.name}</Text>
                </Body>
                <Right>
                  {this.handleFavorite(pokemon)}
                </Right>
            </ListItem>
          }>
            
          </List>
        </Content>
      </Container>
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
    },
    favoritePokemon: (pokemon) => {
      return dispatch(favoritePokemon(pokemon))
    },
    unfavoritePokemon: (pokemon) => {
      return dispatch(unfavoritePokemon(pokemon))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)