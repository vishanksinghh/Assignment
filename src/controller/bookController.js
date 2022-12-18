const bookModel=require('../model/bookmodel.js')
//1
const createBook=async (req,res)=>{
let data=req.body;
let myData=await bookModel.create(data)

res.send({result:myData})
console.log("Data Created successfully")
}
const getBooksData=async (req,res)=>{
    // let data=await bookModel.find();
    //2
    // let data=await bookModel.find().select({bookName:1,authorname:1,_id:0});

    //3
    // let {year}=req.query;
    // console.log(year)
    // let data=await bookModel.find({year:{$eq:year}});
    

    //4
    // let bodyData=req.body;
    // let data=await bookModel.find(bodyData);

    //5
    // let data =await bookModel.find({$or:[{"price.indianPrice":{$eq:"Rs 5000"}},{"price.indianPrice":{$eq:"Rs 1000"}},{"price.indianPrice":{$eq:"Rs 4000"}}]});

    //6
    let data =await bookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:3000}}]});






    
    res.send({result:data})
    console.log("success")
}

module.exports={createBook,getBooksData}