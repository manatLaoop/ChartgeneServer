const tambons = require('../../models/addressmodel/provinces_model')

module.exports = async (req , res)=>{
 try {

     const get_provinces = await tambons.aggregate([ {$project:{name_th:1 ,
        id:1 , }}]);
   if(!get_provinces){
         res.status(404).json({message:"เกิดข้อผิดพลาดบางอย่าง"})
   }
  return res.status(200).json(get_provinces)
 }catch(err){
    res.status(404).json({message:"เกิดข้อผิดพลาดบางอย่าง"})
 }  
}