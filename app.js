// Basic required imports for NodeJS
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// create instance of express for app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());







app.listen(3000, function(){
    console.log('Server running on port 3000');
});