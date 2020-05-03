const express = require('express');
const router = express.Router();
const User = require('../models').User

function isApiKey(api_key) {
    User.count({
        where: {
            api_key: api_key
        }
    }).then(count => {
        if (count > 0) {
            return true
        } else {
            return false;
        }
    });
}