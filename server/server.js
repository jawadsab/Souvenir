import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./routes/user.js";
import testRoutes from "./routes/test.js";


const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use("/user",userRoutes);
app.use("/test",testRoutes);




const MONGO_URI = "mongodb://localhost:27017/souvenir_db"
const PORT = process.env.port || 5000;
mongoose.connect(MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true})
.then(() => {
    app.listen(PORT,() => {
        console.log(`Server is up and running on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error.message)
})