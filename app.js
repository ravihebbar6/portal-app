var express = require('express');
var dataFile = require('./data/data.json');

var app = express();

app.set('appPort', process.env.PORT || 3000);
app.set('dataFile', dataFile);
app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/speaker'));
app.use(express.static('public'));

app.locals.allSpeakers = dataFile.speakers;
app.locals.siteTitle = "Ravis portal";

server = app.listen(app.get('appPort'), function() {
	console.log(`App is listening on ${app.get('appPort')}`);
});
