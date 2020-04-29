const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Distortion = require('../models').Distortion

/* GUI PART */

router.get('/distortion/show/:id', function (req, res, next) {
  Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('distortion/show', {
        distortion: Distortion
      });
    });
});

router.get('/create', function (req, res, next) {
  Distortion.insertOne(title, description, image, release_date, image, finder)
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

router.get('/api/distortion/show/', function (req, res) {
  Distortion.findAll()
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

router.get('/api/distortion/show/:id', function (req, res) {
  Distortion.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

router.post('/api/distortion/create', bodyParser, function (req, res) {
  console.log(req.headers);
  console.log(req.body);
  Distortion.create({
      title: req.body.title,
      description: req.body.description,
      release_date: req.body.release_date,
      image: req.body.image,
      finder: req.body.finder
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

router.delete('/api/distortion/:id', function (req, res) {
  Distortion.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;