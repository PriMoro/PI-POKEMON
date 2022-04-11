export const GET_POKEMONS = "GET_POKEMONS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_API_DB = "FILTER_API_DB";
export const FILTER_TYPES = "FILTER_TYPES";
export const SEARCH_POKE = "SEARCH_POKE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const POST_POKE = "POST_POKE";

export function getPokes() {
  return (dispatch) => {
    return fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .then((r) => dispatch({ type: GET_POKEMONS, payload: r }))
      .catch((err) => {
        return err;
      });
  };
}
export function searchPoke(name) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then((response) => response.json())
      .then((r) => dispatch({ type: SEARCH_POKE, payload: r }))
      .catch((err) => {
        return err;
      });
  };
}
export function orderByName(payload) {
  return { type: ORDER_BY_NAME, payload };
}
export function orderByAttack(payload) {
  return { type: ORDER_BY_ATTACK, payload };
}
export function filterApiOrDb(payload) {
  return { type: FILTER_API_DB, payload };
}
export function filterTypes(payload) {
  return { type: FILTER_TYPES, payload };
}
export function getDetail(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((r) => dispatch({ type: GET_DETAIL, payload: r }))
      .catch((err) => {
        return err;
      });
  };
}
export function getTypes() {
  return async (dispatch) => {
    try {
      const result = await fetch("http://localhost:3001/types");
      //result.json();
      const r = await result.json();
      console.log(r);
      return dispatch({ type: GET_TYPES, payload: r });
    } catch (err) {
      return err;
    }
  };
}
export function postPokes(payload) {
  console.log(payload);
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/pokemons,${payload}`);
      const r = await response.json();
      console.log(r);
      console.log(response);
      return r;
    } catch (err) {
      console.log(err);
    }
  };
}
