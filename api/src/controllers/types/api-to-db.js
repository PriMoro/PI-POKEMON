const { Type } = require("../../db");
const onlyAllTypes = require("./allApi");

const saveAllTypes = async () => {
  const types = await onlyAllTypes();
  types.forEach((type) => {
    Type.findOrCreate({ where: { name: type } });
  });
};
// to save into database all Api types
module.exports = saveAllTypes;
