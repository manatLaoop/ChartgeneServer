const amphures = require('../../models/addressmodel/amphures_model')

module.exports = async (req , res)=>{

 try {
     const provinceid =  + req.params.province_id

     const get_province = await amphures.aggregate([ {$project:{name_th:1 ,
        _id:1,}}]);
   if(!get_province){
         res.status(404).json({message:"เกิดข้อผิดพลาดบางอย่าง"})
   }

  res.status(200).json(get_province)
 }catch(err){
    res.status(404).json({message:"เกิดข้อผิดพลาดบางอย่าง"})
 }  
}