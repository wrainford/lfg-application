const router = require("express").Router();
const controler = require("../controllers");

router.get("/", controler.games.idx);
router.get("/:id", controler.games.show)
router.get("/new", controler.games.newGame);
router.post("/", controler.games.create);
router.get("/:id/edit", controler.games.edit);
router.put("/:id", controler.games.update);
router.delete("/:id", controler.games.destroy);


module.exports = router;