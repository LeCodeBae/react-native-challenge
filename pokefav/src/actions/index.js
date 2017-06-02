import axios from 'axios'

import * as actionType from './constants'

export const fetchPokemons = () => {
  return (dispatch) => {
    axios.get('http://4b5a9f03.ngrok.io/pokemons')
    .then((res)=>{
      dispatch(fetchPokemonsSuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export const favoritePokemon = (pokemon) =>{
  return (dispatch) => {
    axios.patch('http://4b5a9f03.ngrok.io/pokemons/' + pokemon.id, {
      favorite: true
    }).then((res)=>{
      dispatch(editPokemonSuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export const unfavoritePokemon = (pokemon) =>{
  return (dispatch) => {
    axios.patch('http://4b5a9f03.ngrok.io/pokemons/' + pokemon.id, {
      favorite: false
    }).then((res)=>{
      dispatch(editPokemonSuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const fetchPokemonsSuccess = (pokemons) => ({
  type: actionType.FETCH_POKEMONS_SUCCESS,
  pokemons
})

const editPokemonSuccess = (pokemon) => ({
  type: actionType.EDIT_POKEMONS_SUCCESS,
  pokemon
})