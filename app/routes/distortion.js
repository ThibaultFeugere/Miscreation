const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Distortion = require('../models').Distortion

/* GUI PART */

router.get('/distortion/show/:id', function (req, res) {
  Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('distortion/show', {
        distortion: Distortion
      });
    });
});

router.get('/distortion/create', function (req, res) {
  res.render('distortion/create', {
    distortion: Distortion
  });
});

router.get('/distortion/edit/:id', function (req, res, next) {
  Distortion.findByPk(req.params.id)
    .then(function (Distortion) {
      res.render('distortion/edit', {
        distortion: Distortion
      });
    });
});

router.post('/distortion/update/:id', function(req, res) {
  Distortion.update({
    title: req.body.title,
    description: req.body.description,
    release_date: req.body.release_date,
    image: req.body.image,
    finder: req.body.finder
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function (distortions) {
    res.redirect('/distortion/show/' + req.params.id);
  });
})

router.get('/distortion/delete/:id', function (req, res) {
  Distortion.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (distortions) {
      res.redirect('/');
    });
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

router.post('/api/distortion/create', function (req, res) {
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

router.put('/api/distortion/update/:id', function (req, res) {
  Distortion.update({
      title: req.body.title,
      description: req.body.description,
      release_date: req.body.release_date,
      image: req.body.image,
      finder: req.body.finder
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

router.delete('/api/distortion/delete/:id', function (req, res) {
  Distortion.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;