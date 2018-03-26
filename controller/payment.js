const payment=require('../model/payment');
module.exports={
    createPayment:async (req,res)=>{
        try{
            console.log("payment creation")
            req.body.collectionDate=new Date(req.body.collectionDate);
            req.body.nextPaymentDate= new Date(req.body.nextPaymentDate)
            let createPayment=new payment(req.body);
            let result=await createPayment.save();
            res.send({msg:"Payment record has been successfully created"})
        }
        catch(err){
            console.log("error",err)
            res.send({msg:"Pls insert a product id"})
        }        
    },

    showPayment:async(req,res)=>{       
        try{
            
            // let result=await payment.find().populate('productId')
            let result=await payment.find()
            res.send(result)
        }         
        catch(err){
            console.log(err)
            res.send({error:err,msg:"pls try after some time"})
        }                
    }        
}