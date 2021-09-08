const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Post",Post);