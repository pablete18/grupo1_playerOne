module.exports = (req,res,next) => {
    if(req.cookies.playerOne){
        req.session.userLogin = req.cookies.playerOne
    }
    next()
}