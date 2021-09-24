const express = require('express')
const mongoose = require('mongoose')
const route = require('./Routes/AppRoute')
const path = require('path')
require('dotenv').config()
// ------------------------------------
const app = express()

const cookieParser = require('cookie-parser')

app.use(cookieParser())

// Dotenv variables
const DB_KEY = process.env.DB_KEY
const PORT = process.env.PORT || 3000

// Connecting with Data Base
mongoose.connect(DB_KEY,{
    useNewUrlParser: true , 
    useUnifiedTopology: true  
})

const db = mongoose.connection

db.on('error', () => {console.log(`Can't load the Data Base, happened a error!`)})
db.on('open', () => {console.log(`Data Base loaded !`)})

// Template EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'Templates'))

// Route
app.use('/', route)

app.listen(PORT, () => {console.log(`Server running on PORT:${PORT}`)})