import express from "express"
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/MERN_AUTH").then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log(err);
})


app.listen(3000 , () => {
    console.log("Server running on port 3000");
});