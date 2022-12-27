const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const login=async(req,res,next)=>{

    let useremail=req.body.emailId
    let userpassword=req.body.password
    // console.log(useremail)
    // console.log(userpassword)
    let user=await userModel.findOne({emailId:useremail,password:userpassword})
    if(!user) return res.send({stauts:false,result:"check your email or password"})
    
    req.userDetails=user;
    next()

    
}
const verifytoken=(req,res,next)=>{
    // console.log(req.headers["x-auth-token"])
    if(!req.headers["x-auth-token"]) return res.send({result:"token not found"})

let verifyToken=jwt.verify(req.headers["x-auth-token"],"VishankSingh",(err)=>{
    if(err)
    {
         res.send({result:"invalid token"})}
         
         else{console.log("token verified")
         next()}
})
console.log("token verified")




}

module.exports={login,verifytoken}