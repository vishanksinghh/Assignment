const userModel=require("../models/userModel.js")
const jwt=require('jsonwebtoken')

const createUser=async(req,res)=>{
try{
  let createuser=await userModel.create(req.body);
  return res.send({result:createuser})
}
catch(error)
{
  res.status(401).send({status:false,result:error.message})
}

}
const userLogin=(req,res)=>{
let token=jwt.sign({_id:req.userDetails._id},'VishankSingh')
res.send({result:token})


}
const user=async(req,res)=>{
  // console.log(req.params.userId)
  let resut=await userModel.findOne({_id:req.params.userId})
  res.send({result:resut})
}
const updateUser=async(req,res)=>{
  let data=await userModel.findOneAndUpdate({_id:req.params.userId},{mobile:req.body.mobile},{new:true})
  return res.send({result:data})


}
const deleteUser=async(req,res)=>{
  let data=await userModel.findOneAndUpdate({_id:req.params.userId},{isDeleted:true},{new:true})
  return res.send({result:data})
}

module.exports={createUser,userLogin,user,updateUser,deleteUser}
