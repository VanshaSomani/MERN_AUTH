import express from "express"
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//router
import userRouter from './routes/UserRoutes.js';
import authRouter from './routes/AuthRoutes.js';

//mapping
app.use('/api/user' , userRouter)
app.use('/api/auth' , authRouter)

//middleware
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "INternal Server Error"
    return res.status(statusCode).json({
        success : false ,
        error : message,
        statusCode: statusCode
    })
})

//dbConnection
mongoose.connect("mongodb://127.0.0.1:27017/MERN_AUTH").then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log(err);
})


app.listen(3000 , () => {
    console.log("Server running on port 3000");
});