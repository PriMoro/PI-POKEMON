// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require("express");
const pokemons = require("./pokemons.js");
const types = require("./types.js");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.use("/pokemons", pokemons);
router.use("/types", types);

module.exports = router;
