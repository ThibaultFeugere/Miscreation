var express = require('express');
var router = express.Router();
const users = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Miscreate',
    users: users.findAll()
  });
});

/* Route /status */
router.get("/status", function(req, res) {
  res.send("OK !");
});

/* Route /index */
router.get("/test", function (req, res) {
  res.render('index', {
      title: 'PLOP NOOB'
  })
})

module.exports = router;
