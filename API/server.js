var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose')
const User = require('./models/User')
const bcryptjs = require('bcryptjs')
// var cookieParser = require('cookie-parser')

var jwt = require('jsonwebtoken')
const secret = 'Fullstack'

const expressSession = require('express-session')
const MemoryStore = require('memorystore')(expressSession)

// app.use(express.static('dist'))

// app.use(expressSession({
//   cookie: { maxAge: 86400000 },
//   store: new MemoryStore({
//     checkPeriod: 86400000, // prune expired entries every 24h
//   }),
//   resave: false,
//   saveUninitialized: true, // Add this line
//   secret: 'Fullstack',
// }));

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running')
})

//
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//database
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Already'))
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://nicekrubma10:kulab12345@cluster0.uqjxafb.mongodb.net/?retryWrites=true&w=majority'
)
app.listen(process.env.PORT || 3333, () => {
  console.log(`App listening on port ${process.env.PORT || 3333}`)
})

//api
app.post('/api/login', jsonParser, async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username: username })
    if (user) {
      const match = await bcryptjs.compare(password, user.password)
      if (match) {
        var token = jwt.sign({ username: user.username }, secret, {
          expiresIn: '1h',
        })
        res.json({ message: 'Success', token: token })
      } else {
        res.json({ message: 'The password is incorrect' })
      }
    } else {
      res.json({ message: 'No record found for this username' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/api/authen', jsonParser, (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret)
    res.json({ status: 'ok', decoded })
    res.json({ decoded })
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }
})

//api product
const products = require('./routes/products')
app.use('/api/products', products)

//api typepros
const typepros = require('./routes/typepros')
app.use('/api/typepros', typepros)

//Api add User
const users = require('./routes/users')
app.use('/api/users', users)

//Api add Raw
const raws = require('./routes/raws')
app.use('/api/raws', raws)
