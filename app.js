const http = require('http')

const express = require('express')

const app = express()



app.get('/favicon.ico', (req, res) => res.status(204).end())


app.use('/', (req, res, next) => {
    console.log('In another middleware!')
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)