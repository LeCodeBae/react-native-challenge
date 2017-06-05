import React from 'react';
import renderer from 'react-test-renderer';
import { PokeFav } from './PokeFav';

it('should render component', () => {
  const tree = renderer.create(<PokeFav pokemons={[{ id: 1, name: 'bulbasaur' }]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
