const {body} = require('express-validator');
const {compareSync} = require('bcryptjs')
const { readJSON } = require('../data');

module.exports = [
    body('email')
        .notEmpty().withMessage('Ingrese Email').bail()
        .isEmail().withMessage('El formato es inválido'),
    body('password')
        .notEmpty().withMessage('Ingrese Contraseña')
        .custom((value, {req}) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email)
            if(!user || !compareSync(value,user.password)){
                return false
            }
           
            return true
        }).withMessage('Email o contraseña Invalidas')
]
