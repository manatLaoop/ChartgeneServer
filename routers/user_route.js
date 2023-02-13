const express =  require('express');
const route = express.Router();

route.get('/user'   ,  require('../controllers/usercontroller/user_get') )
route.get('/user/:id'   ,  require('../controllers/usercontroller/user_get') )
route.post('/register'   ,  require('../controllers/usercontroller/user_register') )
route.put('/user/:id'   ,  require('../controllers/usercontroller/user_put') )
route.delete('/user/:id'   ,  require('../controllers/usercontroller/user_delete') )
route.post('/login'   ,  require('../controllers/login_controller') )




module.exports = route;