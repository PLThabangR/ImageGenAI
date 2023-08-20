import mongoose from "mongoose";

//create schema

const Post= new mongoose.Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
   
    

});

//Create a model out of this Schema
const PostSchema = mongoose.model('Post',Post);

export default PostSchema;
