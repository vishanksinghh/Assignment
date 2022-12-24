const  orderModel=require('../models/orderModel.js')
const  productModel=require('../models/productModel')
const  userModel=require('../models/userModel')

const createOrder=async (req,res)=>{
    let checkUser=await userModel.findOne({_id:req.body.userId})
    let checkProduct=await productModel.findOne({_id:req.body.productId})
    if(!checkUser)
    {
        res.send({result:"invalid user id or user id is not filled"})
    }
    else{
          if(!checkProduct)
          {
            res.send({result:"invalid product id  or product id is not filled"})
          }
          else{
          
            if(req.headers.isfreeappuser)
            {
                req.body.amount=0
                req.body.isFreeAppUser=true;
                let order=await orderModel.create(req.body);
                let updeteUserIsFreeAppStatus=await userModel.findOneAndUpdate({_id:req.body.userId},{isFreeAppUser:true})
                   res.send({"order Placed successfully":order});
                  
            }
            else
            {
                let productPrize=checkProduct.price;
                let userBalence=checkUser.balance;
                if(userBalence>=productPrize)
                {
                   let remainingUserBalence=userBalence-productPrize;

                   req.body.amount=productPrize;
                   req.body.isFreeAppUser=false;
                   // updating  user balence
                   let updeteUserBalance=await userModel.findOneAndUpdate({_id:req.body.userId},{balance:remainingUserBalence})
                   ////

                   let order=await orderModel.create(req.body);
                   res.send({orderDetails:order});
                }
                else{
                    res.send({result:"insufficient Balance "})
                }


            }



           
          }
 
        
       

    }



}

module.exports={createOrder}