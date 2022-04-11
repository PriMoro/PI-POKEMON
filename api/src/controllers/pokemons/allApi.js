const axios = require("axios");

const getAllApi = async () => {
  const first20 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const second20 = await axios.get(first20.data.next);
  const all40 = first20.data.results.concat(second20.data.results);

  for (let p of all40) {
    let url = await axios.get(p.url);
    delete p.url;
    p.id = url.data.id;
    p.img = url.data.sprites.other.dream_world.front_default;
    // p.img =
    //   url.data.sprites.versions.generation -
    //   v.black -
    //   white.animated.front_default;
    //p.img = url.data.sprites.front_default;
    p.hp = url.data.stats[0].base_stat;
    p.attack = url.data.stats[1].base_stat;
    p.defense = url.data.stats[2].base_stat;
    p.speed = url.data.stats[5].base_stat;
    p.height = url.data.height;
    p.weight = url.data.weight;
    p.type = url.data.types.map((el) => el.type.name);
  }
  return all40;
  // let poke40 = await all40.map(async (p) => {
  //   let url = await axios.get(p.url);
  //   return { hp: url.data.stats[0].base_stat };
  // });
  // return poke40;
};
module.exports = getAllApi;
