const { Type } = require("../../db");

//_to get all types from database
const getAllTypes = async () => {
  const allTypes = await Type.findAll();
  console.log(allTypes);
  return allTypes;
};
module.exports = getAllTypes;
