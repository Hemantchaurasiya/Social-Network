const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    postId:{type:String,required:true},

    username:{type:String,required:true},

    desc:{type:String,max:250,required:true},

},{timestamps:true});

module.exports = mongoose.model("Comment",CommentSchema);