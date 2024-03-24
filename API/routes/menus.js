const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Menu = require('../models/Menu.js')

////
router.post('/addMenu', async (req, res) => {
  const menuItem = new Menu({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    recipe: req.body.recipe,
    image: req.body.image,
  })

  try {
    const savedItem = await menuItem.save()
    res.status(201).send(savedItem)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/allMenus', async (req, res) => {
  try {
    const menuItems = await Menu.find().populate('recipe') // Use .populate('recipe') if you want to include recipe details based on the recipe ID
    res.status(200).json(menuItems)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
