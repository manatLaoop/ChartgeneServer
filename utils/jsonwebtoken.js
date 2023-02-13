const jwt = require('jsonwebtoken');
 
module.exports = async (id ,  nameLastname  , email )=>{

    const key =  process.env.sercreateKey  
      const jsonWebtoken = await jwt.sign({id:id , nameLastname , email } , key ); 
    return jsonWebtoken
}