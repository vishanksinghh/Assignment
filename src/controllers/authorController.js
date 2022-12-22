const authorModel= require("../models/author")

const createAuthor=async (req,res)=>
{
     let data=req.body;
     let created=await authorModel.create(data)
     res.send({result:created})
}

module.exports= {createAuthor}
