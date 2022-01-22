const router = require('express').Router();
const controler = require("../controllers");
// Newsletter Signup Email Route


router.post("/", controler.emails.newEmail);

module.exports = router;