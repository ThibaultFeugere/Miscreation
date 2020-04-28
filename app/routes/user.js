const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/showall/', function(req, res, next) {
  models.User.findAll()
    .then(function (Distortion) {
      res.render('user/index', {
        distortion: Distortion
      });
    });
});

module.exports = router;
