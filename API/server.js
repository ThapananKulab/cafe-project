var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const User = require('./models/User');
const bcryptjs = require('bcryptjs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// var cookieParser = require('cookie-parser')
// var jwt = require('jsonwebtoken');

app.use(cors());

app.get ('/',(req,res)=>{
    res.send("Server is running");
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (user) {
            const match = await bcryptjs.compare(password, user.password);
            if (match) { 
                res.json({ message: "Success" });
            } else {
                res.json({ message: "The password is incorrect" });
            }
        } else {
            res.json({ message: "No record found for this email" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
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


