const router = require('express').Router();
const userCtrl = require('../controllers')

// ROUTES
router.get('/', userCtrl.users.index);
router.get('/create', userCtrl.users.newUser);
router.get('/:id', userCtrl.users.showUser);
router.post('/', userCtrl.users.createUser);
router.delete('/:id', userCtrl.users.destroyUser);

// Login Handling
router.post('/login', passport.authenticate("local", {
    successRedirect: "/:id",
    failureRedirect: "/login"
}), function (req, res) {
});
// Logout Handling
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;