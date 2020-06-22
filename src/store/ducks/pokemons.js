
export const Types = {
  POKEMON_REQUEST: 'pokemons/POKEMON_REQUEST',
  POKEMON_SUCCESS: 'pokemons/POKEMON_SUCCESS',
};


const INITIAL_STATE = {
  data: {},
};

export default function pokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POKEMON_REQUEST:
      return {
        ...state, data: {},
      };
    case Types.POKEMON_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };

    default:
      return state;
  }
}

export const Creators = {
  pokemonRequest: () => ({
    type: Types.POKEMON_REQUEST,
  }),

  pokemonSuccess: data => ({
    type: Types.POKEMON_SUCCESS,
    payload: { data }
  }),

};


