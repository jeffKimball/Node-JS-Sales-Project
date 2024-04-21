const http = require('http')

const express = require('express')

const app = express()

// app.use



app.get('/favicon.ico', (req, res) => res.status(204).end())

app.use('/',(req, res, next) => {
    console.log('This always runs')
    next()
})

app.use('/add-product', (req, res, next) => {
    console.log('Add Product')
    res.send('<form action="/product" method=""POST><label>Enter a Product </label><input name="productTitle"><button type="submit">Submit</button></form>')

})

app.use('/product', (req, res, next) => {
    
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    console.log('Show Hello Message!')
    res.send('<h1>Hello from Express!</h1><small> URL route =  "/" or nothing</small>')
})

app.listen(3000)