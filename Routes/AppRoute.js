const express = require('express')
const router = express.Router()
const methodOverride = require('method-override')
const auth = require('../Controllers/AuthToken')
// Customer Controller 
const { customerAddPage, customerHomePage, addCustomer,customerDelete,loadCustomerEditPage,editCustomer } = require('../Controllers/CustomerController')
// Product Controller 
const { productsHomePage,loadAddProductPage,addProduct, loadEditPage,editProduct, productDelete } = require('../Controllers/ProductController')
// Login Controller 
const { loadPage, login, loadHome } = require('../Controllers/LoginController')
// No Route Controller
const { noRoute } = require('../Controllers/NoRouteController')
// ------------------------------
router.use(methodOverride('_method'))

// GET
// -----------------------------------------
//Login Routes
router.get('/', loadPage)
router.get('/home',auth, loadHome)
//Customer Routes
router.get('/customers', auth, customerHomePage)
router.get('/addcustomer', auth, customerAddPage)
router.get('/editcustomer/:id', auth, loadCustomerEditPage)
//Products Routes
router.get('/products', auth, productsHomePage)
router.get('/addproduct',auth, loadAddProductPage)
router.get('/editproduct/:id', auth,loadEditPage)
// Route undefined
router.get('*', noRoute )

// POST
// ------------------------------------------
//Login Routes
router.post('/login', express.urlencoded({ extended: true }), login )
//Customer Routes
router.post('/addcustomer',express.urlencoded({ extended: true }), addCustomer)
router.post('/editcustomer/:id',express.urlencoded({ extended: true }), editCustomer)
// Product Routes
router.post('/addproduct',express.urlencoded({extended:true}), addProduct)
router.post('/editproduct/:id', express.urlencoded({extended:true}), editProduct)

// DELETE
// -------------------------------------------
//Customer Route
router.delete('/customer/:id',customerDelete)
// Product Route
router.delete('/product/:id',productDelete)


module.exports = router
