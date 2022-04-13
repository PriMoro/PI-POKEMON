const getAllApi = require("./allApi");
const getAllDataBase = require("./allDb");

//_to get all pokemons
const getAll = async () => {
  const allApi = await getAllApi();
  const allDb = await getAllDataBase();
  const all = allApi.concat(allDb);
  return all;
};
module.exports = getAll;
