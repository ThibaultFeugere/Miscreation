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

router.get('/distortion/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('show', {
        distortion: Distortion
      });
    });
});

/* Route /status */
router.get("/status", function (req, res) {
  res.send("OK !");
});

/* Route /index */
router.get("/test", function (req, res) {
  res.render('index', {
    title: 'PLOP NOOB'
  })
})

module.exports = router;