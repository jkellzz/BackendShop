const express = require('express')
const router = express.Router()
const itemsController = require('./items')

// Get all items
router.get('/', itemsController.getAllItems)

// Get item by _id
router.get('/:id', itemsController.getItemById)

// Create item
router.post('/', itemsController.createItem)

// Update item
router.put('/', itemsController.updateItem)

// Delete item
router.delete('/', itemsController.deleteItem)

module.exports = router