if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const PORT = process.env.PORT || 3000
async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.eedu5.mongodb.net/accounts',{
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () =>{
            console.log("Server has been started...")
        })
    } catch(e) {
        console.log(e)
    }
}

start()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)
