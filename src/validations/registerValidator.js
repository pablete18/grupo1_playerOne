const { check, body } = require("express-validator");
const { readJSON } = require("../data");

module.exports = [
  check("name")
  .notEmpty()
    .withMessage("APA se nos olvido el Nombre")
    .isLength({
      min: 3,
    })
    .withMessage("Dale Pone un nombre")
    .bail()
    .isAlpha('es-ES')
    .withMessage("Escribi en español culia"),
  check("lastName")
  .notEmpty()
  .withMessage("APA se nos olvido el Apellido")
    .isLength({
      min: 3,
    })
    .withMessage("Dale pone un apellido")
    .bail()
    .isAlpha('es-ES')
    .withMessage("Escribi en español culia"),
  check("email")
    .notEmpty()
    .withMessage("Si no pones email como me comunico?")
    .bail()
    .isEmail()
    .withMessage("Dale pone bien el email").bail()
    .custom((value) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === value);
        if(user){
            return false
        }
        return true
    }).withMessage('El email ya se encuentra registrado'),
  check("password")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Debe tener entre 6 y 12 caracteres"),
  body("password2")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return false;
      }
      return true;
    })
    .withMessage("Las contraseñas no coinciden"),
];
