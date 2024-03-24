const mongoose = require('mongoose')

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true, enum: ['กรัม', 'ชิ้น'] },
  quantityInStock: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  // minimumStockLevel: { type: Number }, // สำหรับการเตือนเมื่อสต็อกต่ำ
})

module.exports = mongoose.model('InventoryItem', inventoryItemSchema)
