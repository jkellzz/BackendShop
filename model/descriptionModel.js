const mongoose = require('..db/connection')
const Schema = mongoose.Schema

const descriptionSchema = Schema({
    item: String,
    img: String,
    price: Number,
    inStock: {type: Boolean},
    itemDescription: String,
    rating: Number,
    reviews: String
    
})

const description = mongoose.model('description', descriptionSchema)
module.exports = description
