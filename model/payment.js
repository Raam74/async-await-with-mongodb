const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
        productId:{type: mongoose.Schema.Types.ObjectId,ref: 'product'},
        collectionPerson: String,
        paymentType:String,                
        amount:Number,  
        notes:String,
        collectionDate:Date,
        nextPaymentDate:Date
    });


module.exports = mongoose.model('payment', paymentSchema);