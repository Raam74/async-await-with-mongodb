const product=require('../model/product')
module.exports={
    createProduct:async (req,res)=>{
        try{
            console.log("hello raam")
            let createProduct=new product(req.body);
            let result=await createProduct.save();
            res.send({msg:"record has been successfully created"})
        }
        catch(err){
            console.log("error",err)
            res.send({msg:"Pls insert all fields",error:err})
        }        
    },

    showProduct:async (req,res)=>{
        try{            
            if(req.body.productId){
                var query=product.findOne({_id:req.body.productId})
            }
            else{
                var query=product.find()
            }
            let result=await query;
            res.send(result)
        }
        catch(err){
            console.log("error",err)
            res.send({msg:"unable to fetch the record"})
        }        
    }        
}