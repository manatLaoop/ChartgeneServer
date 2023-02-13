const mongoose = require('mongoose')
const product = require('../../models/product_model')
module.exports = async (req, res) => {
    try {
        let data = {
            addminid: mongoose.mongo.ObjectId(req.body.addminid) ,
            productid: mongoose.mongo.ObjectId(req.body.productid) ,
            pseparatetype:  req.body.pseparatetype,
            pcolor:  req.body.pcolor ,
            priceDtail: req.body.priceDtail
        };
         console.log(data)
        const insertdata = await product.create(data);
        if (!insertdata) {
            res.status(503).json({ message: "ไม่สามารถ เพิ่ม ข้อมูลได้ กรุณาาติดต่อเจ้าหน้าที่ " })
        }
        res.status(201).json({ message: "update product  price success " })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message })
    }
}

