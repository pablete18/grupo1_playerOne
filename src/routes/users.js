const express = require('express');
const { login,logout,processLogin,processRegister,profile,register,updateProfile } = require('../controllers/usersController');
const router = express.Router();

/* /users */
//LOGIN
router.get('/login', login);
router.post('/login', processLogin);
//REGISTER
router.get('/register', register);
router.post('/register',processRegister);
//PROFILE
router.get('/profile', profile);
router.put('/profile', updateProfile);
//LOGOUT
router.get('/logout', logout)



module.exports = router;