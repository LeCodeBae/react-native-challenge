import React from 'react';
import { PokeList } from './PokeList';
import renderer from 'react-test-renderer';

it('should render component', () => {
  const tree = renderer.create(<PokeList pokemons={[{id: 1, name: 'bulbasaur'}]} fetchPokemons={()=>{}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});