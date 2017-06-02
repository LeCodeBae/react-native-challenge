import React, { Component } from 'react'
import { Container, Header, Content, Item, List, ListItem, Thumbnail, Text, Body, Left, Icon, Right, Button, Input} from 'native-base';
import { connect } from 'react-redux'

import { fetchPokemons, favoritePokemon, unfavoritePokemon } from '../actions'

export class PokeList extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchTerm: ''
    }
  }
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
  
  handleSearch(){
    if (this.state.searchTerm){
      let regex = new RegExp(this.state.searchTerm, 'g')
      let arr = this.props.pokemons.filter(pokemon=>pokemon.name.match(regex))
      return arr
    } else {
      return this.props.pokemons
    }
  }
  
  render(){
    return (
      <Container>
      <Header searchBar rounded>
        <Item>
            <Icon name="md-search" />
            <Input placeholder="Search for pokemon" onChangeText={(searchTerm)=>{this.setState({searchTerm})}}/>
        </Item>
        <Button transparent>
            <Text>Search</Text>
        </Button>
      </Header>
        <Content>
          <List 
          dataArray={this.handleSearch()}
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
    pokemons: state.sort(function(a, b) {
      return (a.id - b.id);
    })
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