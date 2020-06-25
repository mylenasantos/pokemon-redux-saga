import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PokemonsActions } from '../ducks/pokemons';

export function* pokemonRequest() {
  const response = yield call(api.get, `/pokemon?&limit=10`);
  yield put(PokemonsActions.pokemonSuccess(response.data));
}
