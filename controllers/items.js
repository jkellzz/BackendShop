const Item = require('../model/itemModel')

// Controller to get all items
const getAllItems = (req, res) => {
    Item.find({}).then(items => {
        res.json(items)
    })
}

// Controller to get item by _id
const getItemById = (req, res) => {
    Item.findById(req.params.id).then(item => {
        res.json(item)
    })
}

// Controller to create an item
const createItem = (req, res) => {
    Item.create(req.body).then(item => {
        res.json(item)
    })
}

// Controller to update an item
const updateItem = (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(item => {
        res.json(item)
    })
}

// Controller to delete an item
const deleteItem = (req, res) => {
    Item.findByIdAndDelete(req.params.id).then(author => {
        res.json({
            "status": "success",
            "msg": "author deleted"
        })
    })
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}