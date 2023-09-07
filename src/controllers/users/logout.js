module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('playerOne',null,{
        maxAge : -1
    })
    return res.redirect('/')
}