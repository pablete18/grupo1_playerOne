const express = require("express");
const router = express.Router();

const {
  register,
  processRegister,
  login,
  processLogin,
  profile,
  updateProfile,
  logout,
} = require("../controllers/usersController");

const loginValidator = require("../validations/loginValidator");



/* /users */
//LOGIN
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
//REGISTER
router.get('/register', register);
router.post('/register',processRegister);
//PROFILE
router.get('/profile', profile);
router.put('/profile-edit', updateProfile);
//LOGOUT
router.get('/logout', logout)



module.exports = router;