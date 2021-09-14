const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sepetSchema = new Schema({
    musteriId:{
        type: Number,
        required: true
    },
    index: {
        type: Number,
        auto: true,
        unique: true,
    }
}, {collection: "sepet"});



const Sepet = mongoose.model('sepet', sepetSchema);

module.exports = Sepet;