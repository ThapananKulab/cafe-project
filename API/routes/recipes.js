const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe.js')
//
router.get('/all', async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/add', async (req, res) => {
  console.log(req.body) // Debug: Log the incoming request body

  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    method: req.body.method,
  })

  try {
    const newRecipe = await recipe.save()
    res.status(201).json(newRecipe)
  } catch (err) {
    console.error(err)
    res.status(400).json({ message: err.message })
  }
})

// More routes can be added

module.exports = router
