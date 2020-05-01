const express = require('express');
const router = express.Router();
const User = require('../models').User

/* GET users listing. */

router.get('/user/show/id', function(req, res, next) {
  User.findAll()
    .then(function (Users) {
      res.render('user/index', {
        users: Users
      });
    });
});

router.get('/user/show/', function(req, res, next) {
  
})

module.exports = router;
