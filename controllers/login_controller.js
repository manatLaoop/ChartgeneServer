const user = require('../models/user_model')
const jwt = require('../utils/jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    try {
        const data = {
            email: req.body.email,
            password: req.body.password
        }
        // console.log(data);
        let login = await user.aggregate([
            { $match: { email: data.email } },
            { $project: { _id: 1, nameLastname: 1, password: 1, imageProfile: 1 } }
        ]
        );
        if (login.length > 0) {
            let comparepassword = await bcrypt.compare(data.password, login[0].password);
            if (comparepassword) {
                const token = await jwt(login[0]._id, login[0].nameLastname , login[0].gmail).then((value) => {
                   
                    res.status(200).json({
                        message: 'login sucess', userdata: {
                            token:value,
                            id: login[0].id,
                            email: login[0].email,
                            nameLastname: login[0].nameLastname,
                            imageprofile: login[0].imageProfile
                        }
                    })
                }).catch(
                    (err) => {
                        res.status(500).json({ message: 'server is error' })
                    }
                )

                // res.send(comparepassword)
            } else {

                res.status(404).json({ message: "ไม่พบข้อมูล" })
            }

        } else {
            res.status(404).json({ message: "ไม่พบข้อมูล" })
        }




    } catch (error) {
        res.status(404).json({ message: "ไม่พบข้อมูล" })
    }
}