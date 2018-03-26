const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aquaProduct');

const app=express();
const pro=require('./controller/product');
const payment=require('./controller/payment');
const service=require('./controller/service');

//middleware
app.use(bodyParser.json());
app.post('/createProduct',pro.createProduct);
app.post('/showProduct',pro.showProduct);

app.post('/createPayment',payment.createPayment);
app.post('/showPayment',payment.showPayment);

app.post('/createService',service.createService);
app.post('/showService',service.showService);
let port=8000;
app.listen(port,()=>console.log(`The port is running at ${port}`))