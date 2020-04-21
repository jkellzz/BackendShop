const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const ItemSchema = Schema({
    "item": String,
    "img": String,
    "price": Number,
    "inStock": {type: Boolean},
    "itemDescription": String,
    "review": [
        {
        "ref": "Review",
        "type": Schema.Types.ObjectId
        }
    ]
})

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
