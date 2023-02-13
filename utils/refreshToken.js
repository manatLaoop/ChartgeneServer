const jwt = require('jsonwebtoken');
const reToken = require('./jsonwebtoken')
module.exports = async (req, res) => {
    try {
        const key = process.env.sercreateKey
        let authorization = await req.header('authorization')
        let id = await req.header('id')
        let nameLastname = await req.header('nameLastname')
        let email = await req.header('gmail')
        let tokenDfault = reqToken.split(' ')[1];

        let refreshToken = await jwt.verify(tokenDfault, key)

        if (refreshToken) {
            let Rftoken = reToken(id, nameLastname , email )
            res.set('token', Rftoken)
            res.set('user', 'manat')
            res.status(200).json({ message: "Retoken is success" });

        }
        return res.status(404).json({ message: true })
    } catch (error) {
        return res.status(200).json({ message: true })
    }
}