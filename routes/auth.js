const router = require('express').Router()
const User = require('../models/Users')

// trial purpose
// router.get('/login', (req, res) => {
//     res.send("user logged in")
// })
// router.get('/register', (req,res) => {
//     res.send("user registered ")
// })

// upload in mongo : register
router.post('/register', async (req, res) => {

    console.log(req.body)
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        // saving in db
        const data = await user.save()
        // evertime the api is hit
        res.status(200).json(data)
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})


// check in mongo : login
router.post('/login', async (req, res) => {

    console.log(req.body)
    try {
        // checking email in db
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(400).json({message:"user not found", status:false})

        // validating password
        const validatePassword = req.body.password == user.password
        !validatePassword && res.status(400).json({message:"invalid password", status:false})

        // on login successful
        res.status(200).json(user)
    }
    catch (e) {
        console.log("::err"+e)
        res.status(500).json(e)
    }
})

module.exports = router