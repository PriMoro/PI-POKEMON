const { Type } = require("../../db");
const onlyAllTypes = require("./allApi");

//_to save pokemons types into database
const saveAllTypes = async () => {
  const types = await onlyAllTypes();
  console.log(types);
  types.forEach((type) => {
    Type.findOrCreate({ where: { name: type } });
  });
};
module.exports = saveAllTypes;
