const express = require('express');
const router = express.Router();
const User = require('../models').User

/* API PART */

router.get('api/user/show/', function (req, res) {
  User.findAll()
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

router.get('api/user/show/:id', function (req, res) {
  User.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.post('/api/user/create', function (req, res) {
  User.create({
      name: req.params.name,
      email: req.params.email,
      password: req.params.password
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

router.put('/api/user/update/:id', function (req, res) {
  User.update({
      name: req.params.name,
      email: req.params.email,
      password: req.params.password
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

router.delete('/api/user/delete/:id', function (req, res) {
  User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

module.exports = router;