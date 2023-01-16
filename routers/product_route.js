const express = require('express');
const route = express.Router();
  route.post('/productmodel' , require('../controllers/products/product_model_controller_post'))
  route.get('/productmodel' , require('../controllers/products/product_model_controller_get'))


module.exports = route

