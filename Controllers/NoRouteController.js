

const noRoute = (req,res) => {
    res.status(404)
    res.render('error', {message:`404 This page don't exist!`})
}

module.exports = {noRoute}