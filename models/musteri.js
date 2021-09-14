const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    ad: {
        type: String,
        required: true,
    },
    soyad: {
        type: String,
        required: true,
    },
    sehir: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        unique: true,
        auto: true
    }
}, {collection: "newmusteri"});



const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;