const  productModel=require('../models/productModel')

const createProduct=async (req,res)=>{

    if(!req.body.price)
    {res.send({status:"price is a mendatory field"})}
    else{

let product=await productModel.create(req.body);
res.send({result:product});
    }

}

module.exports={createProduct}