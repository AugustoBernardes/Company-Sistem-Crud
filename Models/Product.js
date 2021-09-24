const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String},
    unitPrice:{type:Number},
    quantity:{type:Number},
    code:{type:String},
    total:{type:Number}
})

module.exports = mongoose.model('Product', productSchema)