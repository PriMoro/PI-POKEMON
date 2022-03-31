const axios = require("axios");
const { Type } = require("../../db");

const onlyAllTypes = async () => {
  const types1 = await axios.get("https://pokeapi.co/api/v2/type");
  const types2 = types1.data.results;
  const onlyTypes = types2.map((el) => el.name);

  return onlyTypes;
};
// to get all types from api
module.exports = onlyAllTypes;
