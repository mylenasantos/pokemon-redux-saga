import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PokemonsActions } from '../ducks/pokemons';

export function* pokemonRequest(action) {

  const response = yield call(api.get, '/pokemon');

  yield put(PokemonsActions.pokemonSuccess(response.data));
  console.tron.log('response', 'eu sou o response =>', response.data)
  console.log('response', 'eu sou o response =>', response.data)



}