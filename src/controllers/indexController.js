const { readJSON } = require("../data");

module.exports = {
    index : (req, res) => {
        return res.render('index',{
            products
        });
    },
    admin : (req, res ) => {
        return res.render('admin', {
            products
        })
    }
}