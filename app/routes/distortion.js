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

router.get('/create', function (req, res, next) {
  models.Distortion.insertOne(title, description, image, release_date, image, finder)
  // .then(function (Distortion) {
  res.render('distortion/create', {
    yes: 'Création',
    title: req.body.title,
    description: req.body.description,
    release_date: req.body.release_date,
    image: req.body.image,
    finder: req.body.finder,
  });
  // });
});

/* API PART */

router.get('/api/distortion/show/:id', function (req, res, next) {
  models.Distortion.findByPk(req.params.id)
    .then((result) => res.json(result))
});

router.get('/api/distortion/showall/', function (req, res, next) {
  models.Distortion.findAll()
    .then((result) => res.json(result))
});

router.post('/api/distortion', function (req, res, next) {
  models.Distortion.create({
      title: req.body.title,
      description: req.body.description,
      release_date: req.body.release_date,
      image: req.body.image,
      finder: req.body.finder
    })
    .then((result) => res.json(result))
})

router.delete('/api/distortion/:id', function (req, res, next) {
  models.Distortion.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
});

module.exports = router;