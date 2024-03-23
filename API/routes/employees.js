const cloudinary = require('../utils/cloudinary.js')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const User = require('../models/User.js')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'users',
  },
})

const parser = multer({ storage: storage })

router.post('/add-user', parser.single('image'), async (req, res) => {
  const {
    username,
    password,
    firstname,
    lastname,
    email,
    phone,
    address,
    role,
  } = req.body
  const imageUrl = req.file.path

  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'ชื่อผู้ใช้นี้ถูกใช้แล้ว โปรดเลือกชื่อผู้ใช้อื่น',
        data: null,
      })
    }

    const newUser = new User({
      username,
      password,
      firstname,
      lastname,
      email,
      phone,
      address,
      role,
      image: {
        url: imageUrl,
      },
    })
    const savedUser = await newUser.save()

    res.json({
      success: true,
      message: `User registration successful for ${username}`,
      data: savedUser,
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ success: false, message: 'Server error', data: null })
  }
})

module.exports = router
