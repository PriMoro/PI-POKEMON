const { Router } = require("express");
const getAllTypes = require("../controllers/types/all.js");
const router = Router();

router.get("/", async (req, res) => {
  const allTypes = await getAllTypes();
  res.send(allTypes);
});

module.exports = router;
