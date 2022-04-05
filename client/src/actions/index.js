export const GET_POKEMONS = "GET_POKEMONS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export function getPokes() {
  return (dispatch) => {
    return fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .then((r) => dispatch({ type: GET_POKEMONS, payload: r }));
  };
}
export function orderByName(payload) {
  return { type: ORDER_BY_NAME, payload };
}
export function orderByAttack(payload) {
  return { type: ORDER_BY_ATTACK, payload };
}
