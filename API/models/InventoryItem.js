const mongoose = require('mongoose')

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  quantityInStock: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
})

module.exports = mongoose.model('InventoryItem', inventoryItemSchema)
