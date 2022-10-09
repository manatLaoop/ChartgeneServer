
const express = require("express");
const app = express();
const morgan = require("morgan")
require('dotenv').config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('combined'))

async function connectServer() {
     await require('./db/db') 
     app.use(require('./routers/user_route'))
     
}

connectServer()
app.listen(process.env.PORT, () => {

    // console.log(`server is runing PORT => ${process.env.PORT}`);

});