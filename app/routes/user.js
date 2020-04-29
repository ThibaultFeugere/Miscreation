const express = require('express');
const router = express.Router();
const User = require('../models').User

/* GET users listing. */
router.get('/showall/', function(req, res, next) {
  User.findAll()
    .then(function (Users) {
      res.render('user/index', {
        users: Users
      });
    });
});

module.exports = router;
