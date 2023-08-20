import {Router} from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'

import Post from '../models/post.js';

const router = Router();

//gET ALL POSTS
router.route('/').get(async(req,res)=>{

    try{
        const posts =await Post.find({})

        res.status(200).json({success:true,data:posts})
    }catch(error){
        res.status(500).json({success:false,message:'Unable to create a post, please try again'})
    }
})

//Create a Post
router.route('/').post(async(req,res)=>{
    
    try{
        //Getting data from body req
        const {name,prompt} =req.body;
            //Creating database schema
        const newPost = await Post.create({
            name,prompt
        })
    
        //send feedback to user
        res.status(201).json({success:true,data:newPost})
    }catch(error){
        res.status(500).json({success:false,message:error})
    }


})




export default router