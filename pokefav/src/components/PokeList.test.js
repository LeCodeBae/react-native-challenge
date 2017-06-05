import React from 'react';
import renderer from 'react-test-renderer';
import { PokeList } from './PokeList';

it('should render component', () => {
  const tree = renderer.create(<PokeList pokemons={[{ id: 1, name: 'bulbasaur' }]} fetchPokemons={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
