const router = require('express').Router();
const userCtrl = require('../controllers')

// ROUTES
router.get('/', userCtrl.users.index);
router.get('/create', userCtrl.users.newUser);
router.get('/:id', userCtrl.users.showUser);
router.post('/', userCtrl.users.createUser);
router.delete('/:id', userCtrl.users.destroyUser);

// NEW LOGIN ROUTE
router.post('/login', passport.authenticate("local", {
    successRedirect: "users/profile",
    failureRedirect: "/login"
}), function (req, res) {
});
module.exports = router;