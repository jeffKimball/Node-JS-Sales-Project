const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    console.log('Add Product')
    res.send('<form action="/product" method="POST"><label>Enter a Product </label><input name="productTitle"><button type="submit">Submit</button></form>')

})

router.post('/product', (req, res, next) => {
    console.log({...req.body});
    res.redirect('/')
})

module.exports = router