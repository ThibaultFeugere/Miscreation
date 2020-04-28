const express = require('express');
const router = express.Router();
const models = require('../models')

/* GUI PART */

router.get('/distortion/show/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('distortion/show', {
        distortion: Distortion
      });
    });
});

router.get('/distortion/create', function (req, res, next) {
    res.render('distortion/create');
});

/* API PART */

router.get('/api/distortion/show/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then( (result) => res.json(result))
});

router.get('/api/distortion/showall/', function (req, res, next) {
  models.Distortion.findAll()
    .then( (result) => res.json(result))
});

router.delete('/api/distortion/:id', function (req, res, next) {
  models.Distortion.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((result) => res.json(result))
});

module.exports = router;