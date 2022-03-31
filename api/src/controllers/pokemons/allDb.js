const { Pokemon, Type } = require("../../db");

const getAllDataBase = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
module.exports = getAllDataBase;
