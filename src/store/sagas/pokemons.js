import { call, put } from 'redux-saga/effects';

import { Creators as PokemonsActions } from '../ducks/pokemons';

export function* pokemonRequest(action) {
  const response = yield call(
    action.api.get,
    `/pokemon?offset=${action.page}&limit=10`
  );
  yield put(PokemonsActions.getPokemonSuccess(response.data));
}
