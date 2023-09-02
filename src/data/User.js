const { v4: uuidv4 } = require('uuid');
const {hashSync} = require ('bcrypts');


const User = function({ id, name, lastName, email, password, category}){
    this.id = uuidv4();
    this.name = name.trim();
    this.lastName = lastName.trim();
    this.email = email.trim;
    this.password = hashSync(password.trim, 10);
    this.category = "user"

}

module.exports = User