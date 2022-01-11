import express from "express";
import {signin,signup} from "../controllers/user.js";


const router = express.Router();

router.get("/",(req,res) => {
    console.log("Yes")
    res.send("Hellow Wordl")
})
router.post("/signin",signin);
router.post("/signup",signup);





export default router;