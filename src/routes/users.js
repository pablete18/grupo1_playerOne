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
const checkUserLogin = require("../middlewares/checkUserLogin");


/* /users */
router
    .get("/register", register)
    .post("/register", processRegister)
    .get("/login", login)
    .post("/login",loginValidator, processLogin)
    .get("/profile", profile)
  
    .get("/logout",logout)

module.exports = router;
