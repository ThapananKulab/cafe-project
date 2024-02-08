var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const User = require('./models/user.js')


// var cookieParser = require('cookie-parser')
// var jwt = require('jsonwebtoken');

app.use(cors());

app.post('/login', jsonParser, async (req, res) => {
    const { username, password } = req.body;

});




mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Database Already'))
mongoose.connect('mongodb+srv://nicekrubma10:kulab12345@cluster0.uqjxafb.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true})
app.listen(3333,() => {
    console.log("App listening on port 3333")
})
