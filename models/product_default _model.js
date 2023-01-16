const mongoose = require('mongoose');;
const Schema = mongoose.Schema({
      Pname: { type: String, required: true, trim: true , unit:true },
      Pseparatetype: {
            type: String, required: true
      },
      Pseparate: { type: Number, required: true, default: 1 },
      Pcolor: { type: String, required: true },

})
module.exports = mongoose.model('productmodels', Schema)

