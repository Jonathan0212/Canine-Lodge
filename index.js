const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8900;
app.listen(port);
console.log('listening to server:http://localhost:${port}');

// landing page
app.get('/', (reg, res) => {
    res.send("hello!!");
})