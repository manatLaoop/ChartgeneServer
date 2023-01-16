const user = require('../../models/user_model')
const bcrypt = require('bcrypt');
const dotENV = require('dotenv').config()
const jwt = require('../../utils/jsonwebtoken')
const multer = require('multer');
const imageConfig = require('../../utils/Imageconfig')
const upload = multer(imageConfig.imageconfig).single(imageConfig.keyUpload)
module.exports = (req, res) => {
   upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
         return res.send("เกิดข้อผิดพลาดระหว่างอัปโหลดรูป" + err.message)
      } else if (err) {
         return res.send("เกิดข้อผิดพลาดระหว่างอัปโหลดรูป" + err.message)
      }
      try {
         // let profileStatus = false;
         const data = {
            email: req.body.email,
            password: await endcodePassword(req.body.password),
            nameLastname: req.body.nameLastname,
            genders: parseInt(req.body.genders),
            provinces: +req.body.provinces,
            amphures: +req.body.amphures,
            tambons: +req.body.tambons,
            status: +req.body.status,
            imageProfile: req.file ? req.file.filename : ''
         };

        console.log(req.body);
         const addUser = await user.create(data);
         if (addUser) {
            let JWT = await jwt(addUser._id, addUser.nameLastname);
            res.set('token', JWT,)
            return res.status(201).send({ message: "ยินดีต้อนรับเข้าสู่ระบบ" })

         } else {
            return res.status(400).json({ message: "username นี้มีผู้ใช้แล้ว555" })

         }
      } catch (err) {
         return res.status(200).send(err.message);
      }
      // res.set('Content-Type', 'text/plain')
   })
}
async function endcodePassword(password) {
   const salt = 8;
   const endcode = await bcrypt.hash(process.env.PasswordBcrypt, salt);
   return endcode
}





