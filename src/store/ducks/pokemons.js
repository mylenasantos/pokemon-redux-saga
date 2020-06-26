import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getPokemonRequest: ['api', 'page'],
  getPokemonSuccess: ['data']
});

const INITIAL_STATE = { data: {}, page: 0 };

const getPokemonSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, data: action.data, page: action.page };
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_POKEMON_SUCCESS]: getPokemonSuccess
});
