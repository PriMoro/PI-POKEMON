const axios = require("axios");
const { Type } = require("../../db");

//_to get all pokemons types from api
const onlyAllTypes = async () => {
  const types1 = await axios.get("https://pokeapi.co/api/v2/type");
  const types2 = types1.data.results;
  console.log(types2);
  const onlyTypes = types2.map((el) => el.name);
  console.log(onlyTypes);
  return onlyTypes;
};

module.exports = onlyAllTypes;
