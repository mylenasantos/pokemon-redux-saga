import { call, put } from 'redux-saga/effects';

import { Creators as PokemonsActions } from '../ducks/pokemons';

export function* pokemonRequest(action) {
  const response = yield call(
    action.api.get,
    `/pokemon?offset=${action.page}&limit=10`
  );

  let firstLetter = response.data.results.map(el => {
    return el.name.charAt(0);
  });
  let result = firstLetter.filter((el, i, self) => {
    return self.indexOf(el) === i;
  });
  action.letters = [];
  result.map(el => {
    let aux = 0;
    firstLetter.map(elFirst => {
      if (el === elFirst) {
        aux += 1;
      }
    });
    action.letters.push({
      letter: el,
      count: aux
    });
  });
  yield put(PokemonsActions.getPokemonSuccess(response.data, action.letters));
}
