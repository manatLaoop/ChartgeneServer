const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    id: { type: Number, required: true, unique: true, trim: true },
    name_th: { type: String, required: true, unique: true, trim: true },
    name_en: { type: String, required: true, unique: true, trim: true },
    geography: { type: Number,trim: true },
    created_at: { type: Date, required: true, trim: true },
    updated_at: { type: Date, quired: true, trim: true },
    deleted_at: { type: Date,  trim: true },
})

module.exports = mongoose.model('provinces' , Schema )