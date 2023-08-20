import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config'
import connectDB from './src/mongoDB/connect.js';
//import dalleRoutes from './src/routes/dalleRoutes.js'
import postRoutes from './src/routes/postRoutes.js'



//Initialize express
const app=express();

app.use(cors());
app.use(express.json({limit:'50mb'}))
//Use routes with the middleware
app.use('/api/post',postRoutes);
//app.use('/api/dalle',dalleRoutes);

app.get('/',async(req,res)=>{
    res.send("Hello from dalle")
});
//Mongo Db url 
const MONGODB_URL="mongodb+srv://thabangr:thabangr@dalleai.brzyfgh.mongodb.net/?retryWrites=true&w=majority"

const startServer= ()=>{

    try{
        connectDB(MONGODB_URL);
        app.listen(8080,()=> console.log('Serve started on port http://localhost:8080'))
    }catch(error){
        console.log(error)
    }
   
}

startServer();