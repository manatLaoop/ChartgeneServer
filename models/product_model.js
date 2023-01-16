const mongoose = require('mongoose');

const Schema = mongoose.Schema({
      user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
      P_id: { type: mongoose.Schema.Types.ObjectId, required: true },
      Pname: { type: String, require: true, trim: true },
      Ptype:{type:String},
      Pdtail: {
            type: [
                  {
                        Pdigest: { type: String, required: true },
                        Pprice: { type: Number, required: true }
                  },
            ], trim: true
      },
      Pcolor: { type: String, required: true }
}, {
      timestamps: false // and `updated_at` to store the last updated date
})
module.exports = mongoose.model('Product', Schema)






