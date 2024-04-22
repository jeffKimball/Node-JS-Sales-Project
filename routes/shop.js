const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('Show Hello Message!')
    res.send('<h1>Hello from Express!</h1><small> URL route =  "/" or nothing</small>')
})

module.exports = router