const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: Number, required: true, trim: true },
    name_th: { type: String, trim: true },
    name_en: { type: String, trim: true },
    province_id: { type: Number, required: true, trim: true },
    created_at: { type: Date, trim: true },
    updated_at: { type: Date,  trim: true },
    // updated_at: { type: Date, trim: true },
})


module.exports = mongoose.model('amphures' , schema);