const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const login=async(req,res,next)=>{

    let useremail=req.body.emailId
    let userpassword=req.body.password
    // console.log(useremail)
    // console.log(userpassword)
    let user=await userModel.findOne({emailId:useremail,password:userpassword})
    if(!user) return res.status(401).send({stauts:false,result:"check your email or password"})
    
    req.userDetails=user;
    next()

    
}
const verifytoken=(req,res,next)=>{
    // console.log(req.headers["x-auth-token"])
    if(!req.headers["x-auth-token"]) return res.status(401).send({result:"token not found"})
    try{

let verifyToken=jwt.verify(req.headers["x-auth-token"],"VishankSingh")
// if(!verifyToken) return res.send({result:"invalid token"})
req.tokenn=verifyToken._id;

next();
    }
    catch(error)
    {res.status(403).send({error:error})}
}
const authorization=(req,res,next)=>{


     //  authorization
/////////////////////////////////////////////
if(req.tokenn===req.params.userId)
{
   next();
}
else{
    
   return res.send({result:"you are not authorized "})
}
//////////////////////////////////////////////


}

module.exports={login,verifytoken,authorization}