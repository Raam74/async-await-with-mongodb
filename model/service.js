const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
        productId:{type: mongoose.Schema.Types.ObjectId,ref: 'product'},
        servicePerson: String,
        servicePayment:Number,                
        amount:Number,  
        notes:String,
        serviceDate:Date,
        nextServiceDate:Date
    });


module.exports = mongoose.model('service', serviceSchema);