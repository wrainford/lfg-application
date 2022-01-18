const router = require('express').Router();
const userCtrl = require('../controllers')

// ROUTES
router.get('/', userCtrl.users.index);
router.get('/new', userCtrl.users.newUser);
router.get('/:id', userCtrl.users.showUser);
router.post('/', userCtrl.users.createUser);
router.delete('/:id', userCtrl.users.destroyUser);

module.exports = router;

