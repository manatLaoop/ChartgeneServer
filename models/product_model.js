const mongoose = require('mongoose');

const Schema = mongoose.Schema({
      addminid:{  type: mongoose.Schema.Types.ObjectId ,required:true , trim:true },
      productid:{  type: mongoose.Schema.Types.ObjectId ,required:true , trim:true },
      pseparatetype:{type:String , required:true},
      pcolor:String,
      priceDtail:{type:Array , required:true}

}, {
      timestamps: true // and `updated_at` to store the last updated date
})
module.exports = mongoose.model('Products', Schema)






