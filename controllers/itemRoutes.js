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
router.put('/:id', itemsController.updateItem)

// Delete item
router.delete('/:id', itemsController.deleteItem)

module.exports = router