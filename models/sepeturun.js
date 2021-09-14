const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sepetUrunSchema = new Schema({
    sepetId:{
        type: Number,
        required: true,
    },
    tutar: {
        type: Number,
        required: true,
    },
    aciklama: {
        type: String,
        required: true,
    }
}, {collection: "sepetUrun"});



const SepetUrun = mongoose.model('sepetUrun', sepetUrunSchema);

module.exports = SepetUrun;


// SepetId (int)
// Tutar (numeric)
// Aciklama (varchar)