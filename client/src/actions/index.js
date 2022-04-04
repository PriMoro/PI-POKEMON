export const GET_POKEMONS = "GET_POKEMONS";

export function getPokes() {
  return (dispatch) => {
    return fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .then((r) => dispatch({ type: GET_POKEMONS, payload: r }));
  };
}
