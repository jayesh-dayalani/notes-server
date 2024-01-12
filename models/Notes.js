const mongoose = require('mongoose')

const Notes = new mongoose.Schema({
    title: {
        type: String,
        min: 5,
        max: 50,
        required: true
    },
    description: {
        type: String,
        min: 5,
        max: 200,
        required: true,
        // unique: true,
    },
 
}, { timestamps:true})

module.exports = mongoose.model('user', User)

