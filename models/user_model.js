const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  nameLastname: { type: String },
  genders: { type: Number ,required: true },
  provinces: { type: Number, required: true },
  amphures: { type: Number, required: true },
  tambons: { type: Number, required: true },
  imageProfile: { type: String },
   status: { type: Number, enum: [1, 2, 3], default: 1 }
}, { timestamps: true }

);

module.exports = mongoose.model('users', Schema);
