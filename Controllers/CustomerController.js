const Customer = require('../Models/Customer')

// Loading home page

const customerHomePage = async (req,res) => {
    try {
        let document = await Customer.find({})

        res.status(200)
        res.render('allCustomers', {customers: document})
    } catch (error) {
        res.render('error', {message:`Customer was not loaded`})
    }
}

// Adding Customer

const customerAddPage = (req,res) => {
    res.render('addCustomer',{body:{}})
}

const addCustomer = async (req,res) => {

    let customerName = req.body.name.trim()
    let customerPhone = req.body.phone.trim()
    let customerCpf = req.body.cpf.trim()
    let customerEmail = req.body.email.trim()

    let customer = {
        name:customerName,
        phone:customerPhone,
        cpf:customerCpf,
        email:customerEmail,
    }

    customer = new Customer(customer)

    try {
        let document = await customer.save()

        res.status(200)
        res.redirect('/customers')
        
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Customer was not added!`})
    }
}

// Deleting

const customerDelete =  async (req,res) => {
    let id = req.params.id

    try {
        await Customer.findByIdAndDelete(id)

        res.status(200)
        res.redirect('/customers')
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Customer was not deleted!`})
    }
}

// Edit

const loadCustomerEditPage = async (req,res) => {
    let id = req.params.id

    try {
        let document = await Customer.findOne({_id:id})

        res.status(200)
        res.render('editCustomer', {body: document})
     
    } catch (error) {
        res.status(400)
        res.render('error', {message:`Error can't edit the customer!`})
    }
}

const editCustomer = async (req,res) => {

    let id = req.params.id

    let customerUpdated = {
        name: req.body.name.trim(),
        phone: req.body.phone.trim(),
        cpf: req.body.cpf.trim(),
        email: req.body.email.trim(),
    }

    try {

        let document = await Customer.findByIdAndUpdate({_id:id}, customerUpdated)
        
        res.status(200)
        res.redirect('/customers')
    } catch (error) {
        res.status(400)
        res.render('error', {message:`User didn't edited!`})
    }

}

module.exports = { customerHomePage, customerAddPage, addCustomer, customerDelete,loadCustomerEditPage,editCustomer }
