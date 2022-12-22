const publisherModel=require('../models/publisher.js')



const createPublisher=async (req,res)=>
{
     let data=req.body;
     let created=await publisherModel.create(data)
     res.send({result:created})
}
module.exports={createPublisher}