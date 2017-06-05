import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Body } from 'native-base';

const PokeFav = props =>
  (
    <Container>
      <Content>
        {props.pokemons.map(pokemon =>
          (<Card key={pokemon.id}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{pokemon.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(`000${pokemon.id.toString()}`).substr(-3)}.png` }}
              />
            </CardItem>
          </Card>),
       )}
      </Content>
    </Container>
  );

const mapStateToProps = state =>
  ({
    pokemons: state.filter(pokemon => pokemon.favorite === true),
  });

export default connect(mapStateToProps, null)(PokeFav);
