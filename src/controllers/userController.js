const  userModel=require('../models/userModel.js')

const createUser=async (req,res)=>{

    req.body.isFreeAppUser=req.headers.isfreeappuser;

let user=await userModel.create(req.body);
res.send({result:user});


}

module.exports={createUser}