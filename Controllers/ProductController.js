const { findByIdAndDelete, findOne, findOneAndDelete } = require('../Models/Product');
const Product = require('../Models/Product')

// Loading Home Page

const productsHomePage = async (req,res) => {

    try {

        const reducer = (previousValue, currentValue) => (previousValue + currentValue);

        let  document = await Product.find({})

        let totals = []

        document.forEach((doc) => {
            totals.push(doc.total)
        })

        if(totals == ''){
            res.render('allProducts', {products: document, total:0})
        }else{
            let total =  totals.reduce(reducer)
            res.render('allProducts', {products: document, total:total})
        }

        
    } catch (error) {
        res.render('error', {message:`Page didn't loaded!`})
    }

}

// Loading Add Page
const loadAddProductPage = (req,res) => {
    res.render('addProduct', {body:{}})
}

// POST to add the product

const addProduct = async (req,res) => {

    let name = req.body.name.trim()
    let unitPrice = req.body.unitPrice.trim()
    let quantity = req.body.quantity.trim()
    let code = req.body.code.trim()
    let total = unitPrice * quantity

    let product = {
        name:name,
        unitPrice:unitPrice,
        quantity:quantity,
        code:code,
        total:total
    }

    product = new Product(product)

    try {

        let document = await product.save()

        res.status(200)
        res.redirect('/products')
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Product didn't saved!`})
    }


}

// Edit Product

const loadEditPage = async (req,res) => {
    let id = req.params.id

    try {

        let document = await Product.findOne({_id:id})

        res.status(200)
        res.render('editProduct', {body: document})
        
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Edit Page didn't loaded!`})
    }
}

const editProduct = async (req,res) => {

    let id = req.params.id

    let name = req.body.name
    let unitPrice = req.body.unitPrice
    let quantity = req.body.quantity
    let code =  req.body.code
    let total = unitPrice * quantity

    let productUpdate = {
        name: name,
        unitPrice: unitPrice,
        quantity: quantity,
        code: code,
        total: total
    }

    try {

        let document = await Product.findByIdAndUpdate({_id:id}, productUpdate)

        res.status(200)
        res.redirect('/products')
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Product wasn't saved!`})
    }

}

// Delete Product
const productDelete = async (req,res) => {
    let id = req.params.id

    try {

       await Product.findOneAndDelete(id)

        res.status(200)
        res.redirect('/products')
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Product didn't deleted!`})
    }

}

module.exports = {productsHomePage, loadAddProductPage, addProduct, loadEditPage, editProduct, productDelete }