const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/bmicalculator', function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / Math.pow(height, 2);

    res.send(`Your BMI is: ${result}`);
});

app.listen(3000, function () {
    console.log('Listening on port: 3000');
});