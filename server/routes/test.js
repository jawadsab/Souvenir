import express from "express";
import {auth} from "../middlewares/auth.js";

const router = express.Router();


router.get("/info",auth,(req,res) => {
    
    return res.status(200).json({msg:req.userId});
})

export default router;