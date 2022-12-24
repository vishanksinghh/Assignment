const mongoose=require('mongoose')
const orderSchema=mongoose.Schema({
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"userSchema"
   },
   productId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"productSchema"
   },
   amount:Number,
   isFreeAppUser:Boolean,
   date:Date

})

module.exports=mongoose.model('orderSchema',orderSchema)