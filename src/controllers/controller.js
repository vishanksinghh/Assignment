

const authorModel= require("../models/author.js");
const bookModel = require("../models/bookModel.js");


const createBook= async function(req,res)
{
    let data=req.body;
    if(data.author_id)
    {
         let createdData=await bookModel.create(data);
         res.send({result:createdData})
    }
    else{
        res.send("Author Id is not available")
    }

}

const createAuthor=async (req,res)=>
{
    let data=req.body;
    if(data.author_id)
    {
         let createdData=await authorModel.create(data);
         res.send({result:createdData});
    }
    else{
        res.send("Author Id is not available");
    }
  
}
const findData=async(req,res)=>{
    let data=req.param
    // 2
    // let data_id=await authorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    // let result=await bookModel.find(data_id)
    // res.send({result})
    //3     "book_name":"Two states"
    // let updatedAndId=await bookModel.findOneAndUpdate({data},{price:100},{new:true}).select({author_id:1,_id:0,price:1})
    // let UpdatedPrize=updatedAndId.price;
    // let author=await authorModel.findOne({author_id:updatedAndId.author_id})

    // res.send({UpdatedPrize:UpdatedPrize,author:author.author_name})

    // 4

    let findAuthorId= await bookModel.find({price:{$gte:50, $lte:100}})
    let id = findAuthorId.map(x=>x.author_id)
    console.log(id)
 let authorName = await authorModel.find({author_id:id}).select({author_name:1,_id:0})
 res.send({result:authorName})
        
     
}

module.exports={createBook,createAuthor,findData}


