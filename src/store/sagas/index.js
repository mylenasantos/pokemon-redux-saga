import { all, takeLatest } from 'redux-saga/effects';
import { Types as PokemonsTypes } from '../ducks/pokemons';
import { pokemonRequest } from './pokemons';


export default function* rootSaga() {
  yield all([takeLatest(PokemonsTypes.POKEMON_REQUEST, pokemonRequest)]);
}