const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    id: { type: Number, required: true, trim: true },
    zip_code: { type: Number, required: true, trim: true },
    name_th: { type: String, trim: true },
    name_en: { type: String, trim: true },
    amphure_id: { type: Number, required: true, trim: true },
    created_at: { type: Date, trim: true },
    updated_at: { type: Date, trim: true },
    updated_at: { type: Date, trim: true },
})


module.exports = mongoose.model('tambons' , Schema )