const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{type:String},
    phone:{type:Number},
    cpf:{type:Number},
    email:{type:String},
})

module.exports = mongoose.model('Customer', customerSchema)