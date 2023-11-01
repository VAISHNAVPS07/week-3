const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    Name :{
        type : String,
        required : true,
    },
    Duration :{
        type : String,
    },
    Code :{
        type : String,
        required : true,
    },
    Description :{
        type : Number,
        required : true,
    },
    Description :[{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Student"
    
    },
],

 }, {timestamps : true
})

module.exports = mongoose.model('Course',courseSchema)