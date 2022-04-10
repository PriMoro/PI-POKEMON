import {
  GET_POKEMONS,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_API_DB,
  FILTER_TYPES,
  SEARCH_POKE,
  GET_DETAIL,
  GET_TYPES,
  POST_POKE,
} from "../actions";
let initialState = {
  pokemons: [],
  pokemonsCopy: [],
  pokeDetail: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_POKE:
      return { ...state };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokeDetail: [],
        pokemons: action.payload,
        pokemonsCopy: action.payload, //? --> to save an auxiliary state
      };
    case SEARCH_POKE:
      return {
        ...state,
        pokemons: action.payload,
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
    case FILTER_API_DB:
      const all = state.pokemonsCopy;
      const filtered =
        action.payload === "all"
          ? all
          : action.payload === "db"
          ? all.filter((p) => p.ifWasCreated === true)
          : all.filter((p) => !p.ifWasCreated);
      return { ...state, pokemons: filtered };
    case FILTER_TYPES:
      const all2 = state.pokemonsCopy;
      console.log(
        state.pokemonsCopy.map((p) => {
          if (p.types && Object.entries(p.types).length > 0) {
            return p.types[0].name;
          } else if (p.types && Object.entries(p.types).length >= 1) {
            return p.types[0].name && p.types[1].name;
          }
        })
      );

      const fil = all2.filter((t) =>
        t.type
          ? t.type[0] === action.payload || t.type[1] === action.payload
          : t.types
      );

      return {
        ...state,
        pokemons: fil,
      };
    case GET_DETAIL:
      return {
        ...state,
        pokeDetail: action.payload,
      };
    default:
      return { ...state };
  }
}
