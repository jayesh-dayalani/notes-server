const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 5,
            max: 30,
            required: true
        },
        email: {
            type: String,
            min: 5,
            max: 50,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            main: 5,
            max: 30,
            required: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("user", User)

