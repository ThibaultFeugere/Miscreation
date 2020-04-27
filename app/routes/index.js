var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET home page. */
router.get('/', function (req, res, next) {
  models.Distortion.findAll()
    .then(function (distortions) {
      res.render('index', {
        title: 'Miscreate',
        distortions: distortions
      });
    });
});

module.exports = router;