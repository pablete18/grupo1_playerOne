const { readJSON } = require("../../data");

module.exports = (req, res) => {
   

    return res.render("productAdd", {
      brands: brands.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  }