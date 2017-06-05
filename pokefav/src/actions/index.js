import axios from 'axios';

import * as actionType from './constants';

const fetchPokemonsSuccess = pokemons => ({
  type: actionType.FETCH_POKEMONS_SUCCESS,
  pokemons,
});

const editPokemonSuccess = pokemon => ({
  type: actionType.EDIT_POKEMONS_SUCCESS,
  pokemon,
});

export const fetchPokemons = () =>
  (dispatch) => {
    axios.get('http://38a26919.ngrok.io/pokemons')
    .then((res) => {
      dispatch(fetchPokemonsSuccess(res.data));
    }).catch((err) => {
      console.log(err);
    });
  };

export const favoritePokemon = pokemon =>
  (dispatch) => {
    axios.patch(`http://38a26919.ngrok.io/pokemons/${pokemon.id}`, {
      favorite: true,
    }).then((res) => {
      dispatch(editPokemonSuccess(res.data));
    }).catch((err) => {
      console.log(err);
    });
  };

export const unfavoritePokemon = pokemon =>
  (dispatch) => {
    axios.patch(`http://38a26919.ngrok.io/pokemons/${pokemon.id}`, {
      favorite: false,
    }).then((res) => {
      dispatch(editPokemonSuccess(res.data));
    }).catch((err) => {
      console.log(err);
    });
  };
