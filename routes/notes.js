const router = require('express').Router()
const Note = require('../models/Notes')

// create notes
// this will be same as register func
router.post('/addNotes', async (req, res) => {

    console.log(req.body)
    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            postedBy: req.body.postedBy
        })

        // saving in db
        const data = await note.save()
        // evertime the api is hit
        res.status(200).json(data)
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})


// delete notes

// update notes

// get all notes

module.exports = router