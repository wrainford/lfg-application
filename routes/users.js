const router = require('express').Router();
const userCtrl = require('../controllers')
const passport = require('passport');
const user = require('../models/user');
const {
    notAuthenticated,
    authenticated,
} = require('../auth/auth');
// ROUTES

// INDEX Profile Page
router.get("/", authenticated, userCtrl.users.userHome);
//Favorite games page
router.get("/favorites/:id", authenticated, userCtrl.users.showFav);
//Add favorites page
router.get("/addfavorites/:id", authenticated, userCtrl.users.editFav);
// LOGIN Login Page
router.get('/login', notAuthenticated, userCtrl.users.loginPage);
// CREATE New User Page
router.get('/create', notAuthenticated, userCtrl.users.newUser);
// LOGIN Post Handling
router.post('/login', notAuthenticated, passport.authenticate("local", {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'Wrong Username or Password',
})
);
//Add game to favorites
router.post("/addfavorites/:id", authenticated, userCtrl.users.addFav);
// CREATE New User Post Handling
router.post('/create', notAuthenticated, userCtrl.users.createAccount);
// LOGOUT User Delete Handling
router.delete('/logout', userCtrl.users.logoutUser);




/*router.get('/users', userCtrl.users.index);

router.get(`/users/${user.id}`, userCtrl.users.showUser);

*/




module.exports = router;
   