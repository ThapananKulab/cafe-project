var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const User = require('./models/User')


// var cookieParser = require('cookie-parser')
// var jwt = require('jsonwebtoken');

app.use(cors());

app.get ('/',(req,res)=>{
    res.send("Server is running");
});
app.post('/login', jsonParser, async (req, res) => {
    const { username, password } = req.body;
});

app.get('/check-db', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send('MongoDB is connected');
    } else {
        res.send('MongoDB is not connected');
    }
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Already'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://nicekrubma10:kulab12345@cluster0.uqjxafb.mongodb.net/?retryWrites=true&w=majority');
app.listen(process.env.PORT || 3333, () => {
  console.log(`App listening on port ${process.env.PORT || 3333}`);
});


