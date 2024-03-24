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

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedRecipe = await Recipe.findByIdAndDelete(id)

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'No recipe found with that ID.' })
    }

    res
      .status(200)
      .json({ message: 'Recipe deleted successfully.', recipe: deletedRecipe })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// PUT endpoint to update a recipe in your Express router
router.put('/update/:id', async (req, res) => {
  const { id } = req.params
  const { name, ingredients } = req.body

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, ingredients },
      { new: true }
    ).populate('ingredients.inventoryItemId')

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'No recipe found with that ID.' })
    }

    res
      .status(200)
      .json({ message: 'Recipe updated successfully.', recipe: updatedRecipe })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
