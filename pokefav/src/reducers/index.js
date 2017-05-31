import * as actionTypes from '../actions/constants'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMONS_SUCCESS:
      return action.pokemons
    default:
      return state
  }
}

export default reducer