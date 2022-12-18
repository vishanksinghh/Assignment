const mongoose=require('mongoose')
const BookSchema=mongoose.Schema({
    bookName:{type:String,required:true},
    price:{
        indianPrice:String,
        europeanPrice:String
    },
    year:{type:Number,
    default:2021},
    tags:[String],

    
    authorname:String,
    totalPages:Number,
    stockAvailable:Boolean

},{timestamps:true})

module.exports=mongoose.model('booksch',BookSchema);