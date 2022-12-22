const mongoose = require('mongoose');
const publisher = require('./publisher');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "LibAuthor"
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref:'publisher'
    },
    isHardCover:
    {
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
