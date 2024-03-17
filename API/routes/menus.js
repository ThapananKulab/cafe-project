const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Menu = require('../models/menu.js')

//
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

module.exports = router
