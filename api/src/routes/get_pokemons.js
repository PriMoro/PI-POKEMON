const { Router } = require("express");
const getAll = require("../controllers/pokemons/all");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allPokemons = await getAll();
  if (name) {
    const filtered = await allPokemons.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    filtered.length ? res.send(filtered) : res.status(404).send("not found");
  } else {
    res.send(allPokemons);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allPokemons2 = await getAll();
  if (id) {
    const filtered = allPokemons2.filter((p) => p.id == id);
    filtered.length ? res.send(filtered) : res.status(404).send("id not found");
  }
});
