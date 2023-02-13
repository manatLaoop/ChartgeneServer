const express = require('express');
const Router = express.Router();

  Router.get('/refreshToken' , require('../utils/refreshToken'));


module.exports = Router;

