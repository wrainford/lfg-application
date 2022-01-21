const router = require('express').Router();
const userCtrl = require('../controllers')
const passport = require('passport');
const user = require('../models/user');

// ROUTES

// INDEX Profile Page
router.get("/", userCtrl.users.userHome);
// LOGIN Login Page
router.get('/login', userCtrl.users.loginPage);
// CREATE New User Page
router.get('/create', userCtrl.users.newUser);
router.get('/users', userCtrl.users.index);



router.get(`/users/${user.id}`, userCtrl.users.showUser);

router.post('/create', notLoggedIn, userCtrl.users.createAccount);
router.delete('/:id', userCtrl.users.destroyUser);

// Login Handling
router.post('/login', notLoggedIn, passport.authenticate("local", {
    successRedirect: `/users/${user.id}`,
    failureRedirect: "users/login",
    failureFlash: 'Wrong Username or Password',
}), function (req, res) {
});
// Logout Handling
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

//Profile Page
/*router.get("/profile", isLoggedIn, (req, res) => {
    res.render("users/profile", {
        name: req.user.name,
        userName: req.user.userName,
        location: req.user.location,
        discordId: req.user.discordId,
        
    })
})*/



module.exports = router;
   