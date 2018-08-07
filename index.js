let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let app = express();
let router = require('./router.js');
let mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');
//App Set Up
app.use(morgan('combined'));
app.use(bodyParser.json({typer:'*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
let server = http.createServer(app);
server.listen(port);
console.log('Server listening on port',port);