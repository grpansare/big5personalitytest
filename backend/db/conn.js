import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 





const db=process.env.DATABASE
mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("database connected")
).catch(err=>console.log(err));

