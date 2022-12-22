const authorModel = require("../models/author")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisher.js")
const{isValidObjectId}=require('mongoose')



const createBook=async (req,res)=>
{
   let data=req.body;
   if(data.author)
   {
    if(isValidObjectId(data.author))
    {
        let validateAuthorId=await authorModel.findById(data.author)
        if(validateAuthorId)
        {
           if(data.publisher)
           {
            if(isValidObjectId(data.publisher))
            {
                
            let validatePublisherId=await publisherModel.findById(data.publisher);
            if(validatePublisherId)
            {
                let created=await bookModel.create(data);
                res.send({result:created});
            }
            else
            {
              res.send({result:"this publisher is Not Present in Database"});
            }
            }
           
            else
            {
                res.send({result:"Invalid Publisher"});
            }
           }
           else
           {
               res.send({result:"publisher is required"})
           }
        
        }
        else
        {
            res.send({result:"this author is Not present in Database"});

        }
            
    }


       else
           {
              res.send({result:"invalid Author"});
           }
}

else
{
   res.send({result:"Author is required"});
}
}
const booksAndAuthor=async (req,res)=>
{
  let result=await bookModel.find().populate('author').populate('publisher');
  res.send({books:result});
}
const HardCoverstatus=async (req,res)=>{
    // await bookModel.updateMany({$set:{isHardCover:false}})
    // res.send({result:"done"})
    let getPublisherId=await publisherModel.find({name:{$in:[" HarperCollins","Penguin"]}}).select({id:1})
    
    let updated= await bookModel.updateMany({publisher:{$in:getPublisherId}},{$set:{isHardCover:true}},{new:true})
    res.send({msg:updated})
   
}
const updatePrice=async function(req,res){
    const getAuthorsId=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    // console.log(getAuthorsId);
    const updatedData=await bookModel.updateMany({author:{$in:getAuthorsId}},{$inc:{"price":10}},{new:true})
    
res.send({msg:updatedData})
}

module.exports= {createBook,booksAndAuthor,HardCoverstatus,updatePrice}

