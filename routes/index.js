const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async (req, res) => {
    const users = await user.find({})
    res.render('index',{
        users
    })
})

module.exports = router
