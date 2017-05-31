import axios from 'axios'

import * as actionTypes from './constants'

export const fetchPokemons = () => {
  return (dispatch) => {
    axios.get('http://ed9aea2e.ngrok.io/pokemons')
    .then((res)=>{
      dispatch(fetchPokemonsSuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const fetchPokemonsSuccess = (pokemons) => ({
  type: actionTypes.FETCH_POKEMONS_SUCCESS,
  pokemons
})