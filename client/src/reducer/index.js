import { GET_POKEMONS } from "../actions";
let initialState = {
  pokemons: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return { ...state };
  }
}
