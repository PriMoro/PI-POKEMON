const axios = require("axios");

const getAllApi = async () => {
  const first20 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const second20 = await axios.get(first20.data.next);
  const all40 = first20.data.results.concat(second20.data.results);

  for (let p of all40) {
    let url = await axios.get(p.url);
    p.id = url.data.id;
    p.hp = url.data.stats[0].base_stat;
    p.attack = url.data.stats[1].base_stat;
    p.defense = url.data.stats[2].base_stat;
    p.speed = url.data.stats[5].base_stat;
    p.height = url.data.height;
    p.weight = url.data.weight;
    // p.Types = url.data.types.map((el) => {
    //   return { name: el.type.name };
    // });
    p.sprites = url.data.sprites.front_default;
  }
  return all40;
};
module.exports = getAllApi;
