import React from 'react';
import { PokeFav } from './PokeFav';
import renderer from 'react-test-renderer';

it('should render component', () => {
  const tree = renderer.create(<PokeFav pokemons={[{id: 1, name: 'bulbasaur'}]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});