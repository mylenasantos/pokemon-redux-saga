import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getPokemonRequest: ['api', 'page'],
  getPokemonSuccess: ['data', 'letters']
});

const INITIAL_STATE = { data: {}, page: 0, letters: [] };

const getPokemonSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    page: action.page,
    letters: action.letters
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_POKEMON_SUCCESS]: getPokemonSuccess
});
