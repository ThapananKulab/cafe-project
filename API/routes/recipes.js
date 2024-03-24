const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe.js')
//
router.get('/all', async (req, res) => {
  try {
    // Here's where we modify the find query to include populate
    const recipes = await Recipe.find({}).populate(
      'ingredients.inventoryItemId'
    )
    res.json(recipes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/add', async (req, res) => {
  console.log(req.body) // Debug

  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    // No method field here
  })

  try {
    const newRecipe = await recipe.save()
    res.status(201).json(newRecipe)
  } catch (err) {
    console.error(err)
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
