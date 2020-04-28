const express = require('express');
const router = express.Router();
const models = require('../models')

/* GUI PART */

router.get('/show/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('distortion/show', {
        distortion: Distortion
      });
    });
});

router.get('/create', function (req, res, next) {
    res.render('distortion/create');
});

/* API PART */

router.get('/api/show/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then( (result) => res.json(result))
});

router.get('/api/showall/', function (req, res, next) {
  models.Distortion.findAll()
    .then( (result) => res.json(result))
});

router.delete('/api/:id', function (req, res, next) {
  models.Distortion.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((result) => res.json(result))
});

module.exports = router;