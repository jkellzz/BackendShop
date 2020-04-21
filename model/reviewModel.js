const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ReviewSchema = Schema({
    "rating": Number,
    "reviews": String
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review
