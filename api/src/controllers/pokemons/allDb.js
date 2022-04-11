const { Pokemon, Type } = require("../../db");

const getAllDataBase = async () => {
  let r = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  r = r.map((e) => ({ ...e.dataValues, types: e.types.map((e) => e.name) }));
  //console.log(r);
  return r;
};
module.exports = getAllDataBase;
