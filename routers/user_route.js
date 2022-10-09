const express =  require('express');
const route = express.Router();

route.get('/user'   ,  require('../controllers/usercontroller/user_get') )
route.get('/user/:id'   ,  require('../controllers/usercontroller/user_get') )
route.post('/user'   ,  require('../controllers/usercontroller/user_post') )
route.put('/user/:id'   ,  require('../controllers/usercontroller/user_put') )
route.delete('/user/:id'   ,  require('../controllers/usercontroller/user_delete') )




module.exports = route;