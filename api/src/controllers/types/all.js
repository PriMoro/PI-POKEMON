const { Type } = require("../../db");

const getAllTypes = async () => {
  const allTypes = Type.findAll();
  return allTypes;
};
module.exports = getAllTypes;
