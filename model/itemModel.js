const mongoose = require('..db/connection')
const Schema = mongoose.Schema

const itemSchema = Schema({
    item: String,
    img: String,
    price: Number,
    inStock: {type: Boolean}
})

const item = mongoose.model('item', itemSchema)
module.exports = item
