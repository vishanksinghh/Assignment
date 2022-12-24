const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    balance:Number,
    Address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isFreeAppUser:{
       type:Boolean,
       default:false
    }

})

module.exports=mongoose.model('userSchema',userSchema)