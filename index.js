var express = require('express');
var theDate = require('./theDate.js');
var path = require('path');

var app = express();
var port = Number(process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views'));

app.get('/:date', function(req, res) {
	var dateParam = req.params;
	res.json(theDate(dateParam.date));
});

app.listen(port);