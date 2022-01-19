const router = require('express').Router();
const userCtrl = require('../controllers')

// ROUTES
router.get('/', userCtrl.users.index);
router.get('/create', userCtrl.users.newUser);
router.get('/:id', userCtrl.users.showUser);
router.post('/:id', userCtrl.users.createUser);
router.delete('/:id', userCtrl.users.destroyUser);

// NEW LOGIN ROUTE
router.post('/:id', userCtrl.users.loginUser)

module.exports = router;

