const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');


const User = function({ name, lastName, email, password}){
    this.id = uuidv4();
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = hashSync(password.trim(), 10);
    this.rol = "user"

}

module.exports = User