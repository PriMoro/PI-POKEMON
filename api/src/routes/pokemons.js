const { Router } = require("express");
const getAll = require("../controllers/pokemons/all");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const allPokemons = await getAll();
    if (name) {
      const filtered = await allPokemons.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      filtered.length ? res.send(filtered) : res.status(404).send("not found");
    } else {
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
    if (name && typeof name === "string") {
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
      res.status(404).send("all fields are required");
    }
  } catch (err) {
    res.status(404).send(err);
  }
});
module.exports = router;
