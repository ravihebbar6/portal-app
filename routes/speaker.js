var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
	var data = req.app.get('dataFile');
	var pagePhotos = [];
	var speakerlist = data.speakers;

	data.speakers.forEach(function(item) {
		pagePhotos = pagePhotos.concat(item.artwork);
	});

	res.render('speakers', {
		pageTitle: "Speakers",
		artwork: pagePhotos,
		pageId: "speakers",
		speakerlist: speakerlist
	});
});

router.get('/speakers/:speaker_id', function(req, res) {
	var data = req.app.get('dataFile');
	var pagePhotos = [];
	var speakerlist = [];

	data.speakers.forEach(function(item) {
		if (item.shortname == req.params.speaker_id) {
			pagePhotos = pagePhotos.concat(item.artwork);
			speakerlist.push(item);
		}
	});

	res.render('speakers', {
		pageTitle: "Speaker Detail",
		artwork: pagePhotos,
		pageId: "speakerDetail",
		speakerlist: speakerlist
	});
});

module.exports = router;
