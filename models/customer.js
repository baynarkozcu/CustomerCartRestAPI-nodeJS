const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
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
    siparis:[
        {
            sepet: [
                {
                    tutar: {
                        type: Number,
                        min:1,
                        required: true
                    },
                    aciklama:{
                        type: String,
                        minlength: 3,
                        
                    }
                }
            ],
            alindiMi: {
                type: Boolean,
                default: false
            }
        }
    ]
}, {collection: "musteri"});



const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;