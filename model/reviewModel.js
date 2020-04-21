const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ReviewSchema = Schema({
    "date": {type: Date, default: Date.now},
    "rating": Number,
    "reviews": String
    
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review
