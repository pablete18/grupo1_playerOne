const fs = require('fs');
const User = require ('../../data/User');
const path = require('path')
const usersFilePath = path.join(__dirname,'../../data/user.json')


module.exports = (req,res)=>{

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

    let newUser = new User(req.body);

    users.push(newUser);

    let usersJson = JSON.stringify(users, null, 3)

    fs.writeFileSync(usersFilePath ,usersJson);

    return res.redirect('/')
}