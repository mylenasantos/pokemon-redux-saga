import { call, put } from 'redux-saga/effects';

import { Creators as PokemonTypeActions } from '../ducks/pokemonTypes';

export function* pokemonTypesRequest(action) {
  const response = yield call(action.api.get, `/pokemon/${action.count}/`);
  yield put(PokemonTypeActions.getPokemonTypes(response.data));
  console.log('response', response.data);
}
