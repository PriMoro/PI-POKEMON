// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require("express");
const pokemons = require("./get_pokemons.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.use("/pokemons", pokemons);

module.exports = router;
