
const amphers = require('../../models/addressmodel/amphures_model');

module.exports = async (req, res) => {
    try {
        const params = +req.params.province_id;
        
        console.log(params);

        let getdata = await amphers.aggregate([ {$match:{province_id:params}}, {  $project: { _id:0, id: 1, name_th: 1 } },])

        return res.status(200).json(getdata);

    } catch (error) {
        return res.status(500).send('Network Error');
    }

}