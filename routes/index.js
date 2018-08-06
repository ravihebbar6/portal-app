var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var data = req.app.get('dataFile');
	var speakerlist = data.speakers;
	var pagePhotos = [];

	data.speakers.forEach(function(item) {
		pagePhotos = pagePhotos.concat(item.artwork);
	});

	res.render('index', {
		pageTitle: "Home",
		artwork: pagePhotos,
		pageId: "home",
		speakerlist: speakerlist
	});
});

module.exports = router;
