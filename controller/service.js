const productService=require('../model/service');

module.exports={
    createService:async (req,res)=>{
        try{
            console.log("createService creation")
            req.body.serviceDate=new Date(req.body.serviceDate);
            req.body.nextServiceDate= new Date(req.body.nextServiceDate)            
            let createService=new productService(req.body);
            let result=await createService.save();
            res.send({msg:"service record has been successfully created"})
        }
        catch(err){
            console.log("error",err)
            res.send({msg:"Pls insert a product id"})
        }        
    },

    showService: async (req,res)=>{               
        try{
            // let result=await productService.findOne({servicePerson:req.body.servicePerson}).populate('serviceId')
            let result=await productService.find({productId:req.body.productId}).populate('productId')
            res.send(result)
        }
        catch(err){
            console.log("error",err)
            res.send({msg:"Unable to create the service",error:err})
        }
                
    }        
}