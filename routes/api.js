var express = require('express');
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');
var fs = require('fs');

var router = express.Router();

router.get('/api', function(req, res) {
  res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body);
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});

router.delete('/api/:id', function(req, res) {
  console.log('it came here');
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});

module.exports = router;
