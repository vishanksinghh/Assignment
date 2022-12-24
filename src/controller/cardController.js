const cardModel=require('../model/card.js')


const create=async function(req,res)
{
     let data=req.body;
   
     const dataresult=await cardModel.create(data)
    
     res.send({result:dataresult})
     
}

const getCard=async function(req,res)
{
     
   
     const dataresult=await cardModel.find()
    
     res.send({result:dataresult})
     
}


module.exports={create,getCard}