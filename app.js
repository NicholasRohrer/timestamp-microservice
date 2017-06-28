// Basic required imports for NodeJS
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// create instance of express for app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('port', (process.env.PORT || 5000));

// GET call to return JSON that formats natural and unix dates
app.get('/dateValues/:dateVal', function(req,res,next){
    // gets the request data for date
    var dateVal = req.params.dateVal;
    
    // options for formatting date in natural date format
    var dateFormattingOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if (isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
        // formula for converting to unix time
        var unixDate = new Date(dateVal).getTime()/1000;
    } else {
        var unixDate = dateVal;
        //formula for converting to natural time
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    } 
    
    res.json({unix: unixDate, natural: naturalDate});
    return ; 
});

// start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
