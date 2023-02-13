const mongoose = require("mongoose");
const user = require('../../models/user_model');

module.exports = async (req, res) => {
   try {
      const id = mongoose.Types.ObjectId(req.params.id)

      const getuserFomeid = await user.find()
      if(!getuserFomeid){
           res.status(404).json({message:"ไม่พบผู้ใช้งาน"})
      }
   
      res.status(202).send(getuserFomeid)

   } catch (err) {
      res.status(404).json({ message: "user is not false" })
   }
}