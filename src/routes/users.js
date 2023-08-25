const express = require('express');
const { login, register } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/login', login);
router.get('/register', register);
router.get('')

module.exports = router;