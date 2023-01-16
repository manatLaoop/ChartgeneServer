const jwt = require('jsonwebtoken');
 
module.exports = async (id ,  nameLastname  )=>{
    const key =  process.env.sercreateKey  
      const jsonWebtoken = await jwt.sign({id:id , nameLastname } , key ); 
    return jsonWebtoken
}