const express = require('express');
const router = express.Router();
const User = require('../models').User

/* GUI PART */

router.get('/users', function (req, res) {
  User.findAll()
    .then(function (users) {
      res.render('user/index', {
        title: 'Miscreate',
        users: users
      });
    });
});

router.get('/user/show/:id', function (req, res) {
  User.findByPk(req.params.id)
    .then(function (User) {
      res.render('user/show', {
        user: User
      });
    });
});

router.get('/user/create', function (req, res) {
  res.render('user/create', {
    user: User
  });
});

router.post('/user/create', function (req, res) {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then(function (users) {
      res.redirect('/users')
    });
});

router.get('/user/edit/:id', function (req, res) {
  User.findByPk(req.params.id)
    .then(function (User) {
      res.render('user/edit', {
        user: User
      });
    });
});

router.post('/user/update/:id', function (req, res) {
  User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function (users) {
      res.redirect('/user/show/' + req.params.id)
    });
});

router.get('/user/delete/:id', function (req, res) {
  User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (users) {
      res.redirect('/users');
    });
});

/* API PART */

router.get('/api/user/show/', function (req, res) {
  User.findAll()
    .then((result) => res.json(result))
    .catch(err => res.json(err));
});

router.get('/api/user/show/:id', function (req, res) {
  User.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.post('/api/user/create', function (req, res) {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then((result) => res.json(result))
    .catch(err => res.json(err));
})

router.put('/api/user/update/:id', function (req, res) {
  User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
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