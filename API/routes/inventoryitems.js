const express = require('express')
const router = express.Router()
const InventoryItem = require('../models/InventoryItem.js')

// Fetch all inventory items
router.get('/all', async (req, res) => {
  try {
    const items = await InventoryItem.find()
    res.json(items)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add a new inventory item
router.post('/add', async (req, res) => {
  const { name, unit, quantityInStock, unitPrice } = req.body
  const item = new InventoryItem({
    name,
    unit,
    quantityInStock,
    unitPrice,
  })

  try {
    const newItem = await item.save()
    res.status(201).json(newItem)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
