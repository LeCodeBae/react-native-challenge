import * as actionType from '../actions/constants'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_SUCCESS:
      return action.pokemons
    case actionType.EDIT_POKEMONS_SUCCESS:
      return [...state.filter( pokemon => pokemon.id !== action.pokemon.id), action.pokemon]
    default:
      return state
  }
}

export default reducer