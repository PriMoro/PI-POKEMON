import { GET_POKEMONS, ORDER_BY_NAME, ORDER_BY_ATTACK } from "../actions";
let initialState = {
  pokemons: [],
  pokemonsCopy: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokemonsCopy: action.payload, //? --> se llena un auxiliar del estado
      };
    case ORDER_BY_NAME:
      const sortedName =
        action.payload === "top"
          ? state.pokemonsCopy.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemonsCopy.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedName,
      };
    case ORDER_BY_ATTACK:
      const sortedAttack =
        action.payload === "top"
          ? state.pokemonsCopy.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemonsCopy.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: sortedAttack };
    //return {};
    default:
      return { ...state };
  }
}
