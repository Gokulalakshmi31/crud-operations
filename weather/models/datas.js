const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Data',dataSchema)