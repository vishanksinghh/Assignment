const customerModel=require('../model/customer.js')

const create=async function(req,res)
{
     let data=req.body;
   
     const dataresult=await customerModel.create(data)
    
     res.send({result:dataresult})
     
}
// active list

const getStatusActiveList=async function(req,res)
 {  
    
     let list=await customerModel.find({status:{$eq:"ACTIVE"},isDeleted:{$eq:false}})
     res.send({result:list})
    

}
const DeleteCustomer=async function(req,res)
{  
   
    let list=await customerModel.findOneAndUpdate({_id:req.query.id},{isDeleted:true},{new:true})
    res.send({result:list})
   

}


module.exports={create,getStatusActiveList,DeleteCustomer}