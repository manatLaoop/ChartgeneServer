const tambons = require('../../models/addressmodel/tambons_model')

module.exports = async (req , res)=>{
 try {
     const amphure_id = +req.params.aumphere_id

     console.log(amphure_id);
     const get_amphure_id = await tambons.aggregate([{$match:{amphure_id:amphure_id} } ,{ $project:{name_th:1  ,
        _id:0, id:1}}]);


   if(!get_amphure_id){
        return  res.status(200).json({message:"ไม่พบข้อมูล"})
   }
 console.log(get_amphure_id)
  return res.status(200).json(get_amphure_id)
 }catch(err){
    res.status(404).json({message:"เกิดข้อผิดพลาดบางอย่าง"})
 }  
}