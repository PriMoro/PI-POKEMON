const { default: axios } = require("axios");
const { Router } = require("express");
const getAll = require("../controllers/pokemons/all");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const r = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const response = r.data;
      const poke = {
        name: response.name,
        id: response.id,
        img: response.sprites.other.dream_world.front_default,
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        weight: response.weight,
        height: response.height,
        speed: response.stats[5].base_stat,
        type: response.types.map((el) => el.type.name),
      };
      res.send([poke]);
    } else {
      const allPokemons = await getAll();
      res.send(allPokemons);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allPokemons2 = await getAll();
    if (id) {
      const filtered = allPokemons2.filter((p) => p.id == id);
      filtered.length
        ? res.send(filtered)
        : res.status(404).send("id not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/", async (req, res) => {
  let {
    name,
    img,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    ifWasCreated,
    type,
  } = req.body;
  try {
    if (!name || typeof name !== "string") {
      res
        .status(400)
        .send(
          "Remember that the name must be a avaliable name. Please don´t try to crash my page"
        );
    }
    if (name && typeof name === "string") {
      if (
        hp < 101 &&
        hp > 0 &&
        attack < 101 &&
        attack > 0 &&
        defense > 0 &&
        defense < 101 &&
        speed > 0 &&
        speed < 101 &&
        height > 0 &&
        height < 101 &&
        weight > 0 &&
        weight < 101
      ) {
        let pokeCreated = await Pokemon.create({
          name,
          img,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          ifWasCreated,
        });
        let pokeType = await Type.findAll({ where: { name: type } });
        //pokeType = pokeType.map((e) => e.name);
        // let pt = pokeType.map((el) => {
        //   for (let i = 0; i < el.length; i++) {
        //     return el[i.name];
        //   }
        // });
        pokeCreated.addType(pokeType);
        res.send("poke created successfully");
      } else {
        res
          .status(404)
          .send(
            "Please, insert avaliable values only. The values can not be greater than 100, and must be numbers"
          );
      }
    } else {
      res.status(404).send("All fields are required");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
