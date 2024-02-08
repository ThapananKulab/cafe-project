var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mysql = require('mysql2');
app.use(cors());

app.post('/login', jsonParser, function (req, res) {
    const { username } = req.body;
    const responseData = {
        username
    };
    res.json(responseData);
});

app.post('/register', jsonParser, async function (req, res, next) {
    try {
        const [results, fields] = await connection.execute(
            'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
            ['Rick C-137', 53]
        );
        console.log(results);
        console.log(fields);
        res.json({ results, fields });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  app.listen(3333,() => {
    console.log("App listening on port 3333")
})
