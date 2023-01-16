
const express = require("express");
const app = express();
const morgan = require("morgan")
const cors = require('cors')
//  multer 

app.use(cors());
const multer = require('multer');
const  image = require('./utils/Imageconfig');
// const upload = multer(image.imageconfig).single(image.keyUpload)

// end multer 

require('dotenv').config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// app.use(morgan('combined'))

async function connectServer() {
     await require('./db/db') 


     app.use(require('./routers/all_route'))
     app.use(require('./routers/user_route'))
     app.use(require('./routers/product_route'))
         
}

connectServer();
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(res.status ?? 500).send(err.message)   
    // res.render('error', { error: err })
  })
app.listen(process.env.PORT, () => {

});