const { Router } = require("express");
//const pokemons = require("./get_pokemons.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

const getAll = require("../controllers/pokemons/all");

router.get("/pokemons", async (req, res) => {
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
router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  const allPokemons2 = await getAll();
  if (id) {
    const filtered = allPokemons2.filter((p) => p.id == id);
    filtered.length ? res.send(filtered) : res.status(404).send("id not found");
  }
});

//router.use("/pokemons", pokemons);

module.exports = router;
