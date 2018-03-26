const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({        
        productName: String,
        capacity: String,
        productType: String,
        customerName: String,
        customerNo:String,
        customerAddress: String,
        customerLocation: String,
        salesPerson:String,
        salesPrice:String,
        paymentType:String,
        paymentStatus:String,
        noOfDues:Number,
        amountPerDues:Number,  
        // salesDate:{ type: Date, default: Date.now } 
        salesDate:Date
    });


module.exports = mongoose.model('product', productSchema);