const mongoose = require('mongoose')
const { Schema } = mongoose
const CitySchema = new Schema({

    name: {
        type: String,
        require: true,
    },
    x:{
        type: Number,
        require: true, 
    },
    y:{
        type: Number,
        require: true, 
    },
    description:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
const City = mongoose.model('City', CitySchema)

module.exports = City