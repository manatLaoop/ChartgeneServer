const { Router } = require('express');
const express = require('express');
const route = express.Router();
  route.post('/productmodel' , require('../controllers/products/product_model_controller_post'))
  route.get('/productmodel' , require('../controllers/products/product_model_controller_get'))
   
  route.post('/updateprice' , require('../controllers/productupdate/updateprice_controller')),




module.exports = route

