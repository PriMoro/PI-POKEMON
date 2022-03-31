const { Router } = require("express");
const getAll = require("../controllers/pokemons/all");
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
module.exports = router;
