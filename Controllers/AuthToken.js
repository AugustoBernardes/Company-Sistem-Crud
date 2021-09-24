const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET

module.exports = function (req,res,next){
    const token = req.cookies.token

    if(token){
        try {
            const userVerified = jwt.verify(token,SECRET)
            req.user = userVerified
            next()
        } catch (error) {
            res.status(401)
            res.render('error', {message: `Acess denied.Login to access!`})
        }
    }else{
        res.status(401)
        res.render('error', {message: `Acess denied.Login to access!`})
    }
}