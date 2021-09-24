const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')
require('dotenv').config()
// ------------------------------------

const SECRET =  process.env.JWT_SECRET

// Load Page GET
const loadPage = (req,res) => {
    res.status(200)
    res.render('login', {body:{}})
}

// Load Home Page GET
const loadHome = (req,res) => {
    res.status(200)
    res.render('home')
}

// Login POST
const login = async (req,res) => {

    // Receiving user Data from FrontEnd
    let userEmail = req.body.email.trim()
    let userPassord = req.body.password.trim()

    // Finding the User on Data Base
    let selectedUser = await User.findOne({email: userEmail})

    if(selectedUser){

        let verifyPassword = bcrypt.compareSync(userPassord, selectedUser.password)

        if(verifyPassword === true){
            res.status(200)
            const token = jwt.sign({ email: selectedUser.email }, SECRET);
            res.cookie('token', token, { maxAge: 28800000, httpOnly: true });
            res.render('home')
        }else{
            res.status(401)
            res.render('error', {message:`Email or password incorrect!`})
        }

    }else{
        res.status(401)
        res.render('error', {message:`Email or password incorrect!`})
    }

}


module.exports = {loadPage,login,loadHome}

