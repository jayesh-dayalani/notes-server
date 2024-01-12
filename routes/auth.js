const router = require('express').Router()
const User = require('../models/Users')

router.get('/login', (req, res) => {
    res.send("user logged in")
})

// router.get('/register', (req,res) => {
//     res.send("user registered ")
// })

// upload in mongo
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
module.exports = router