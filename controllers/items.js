const Item = require('../model/itemModel')

// Controller to get all items
const getAllItems = (req, res) => {
    Item.find({}).then(items => {
        res.json(items)
    })
}

// Controller to get item by _id
const getItemById = (req, res) => {
    Item.
}