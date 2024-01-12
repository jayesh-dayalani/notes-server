const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')

// using our custom endpoints
const authRouter = require('./routes/auth')

const app = express()

// set and use .env 
dotenv.config()

// adding middleware
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())


// adding routes
// note: this will be in ./auth
// app.get('/notes', (req, res) => {
//     res.send(":: notes fetched successfull")
//     console.log(':: /notes fetched ')
// })

// calling custom endpoints / apis
app.use('/api/auth', authRouter)


// connecting mongodb
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log(":: mongodb connect successful")
    }).catch(
        (err) => {
            console.log("error connecting mongo db :" + err)
        })

app.listen(8000, () => {
    console.log(":: app is running on PORT : http://localhost:8000")
})