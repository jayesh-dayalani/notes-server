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
router.delete('/deleteNotes/:id', async (req, res) => {
    try {
        // check if the notes is present 
        const notes = await Note.findOne({ _id: req.params.id })
        !notes && res.status(400).json({message:"note not found", status:false})

        // delete if present
        const note = await Note.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "note deleted successful", status: true })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})
// update notes

// get all notes

module.exports = router