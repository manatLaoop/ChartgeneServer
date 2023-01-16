const express = require('express');
const router = express.Router();



router.get('/province' , require('../controllers/address/get_provinces'));
router.get('/amphures/' , require('../controllers/address/get_amphures'));
router.get('/amphures/:province_id' , require('../controllers/address/get_amphers_byId'));
router.get('/tambons/:aumphere_id' , require('../controllers/address/get_tambons_byid'));

router.use(require('./user_route'))




module.exports = router




