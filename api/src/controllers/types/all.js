const { Type } = require("../../db");

const getAllTypes = async () => {
  const allTypes = await Type.findAll();
  //console.log(allTypes);
  return allTypes;
};
module.exports = getAllTypes;
