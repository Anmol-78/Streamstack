//import {asynchandler} from "..utils/asynchandler.js";
import { asynchandler } from "../utils/asynchandler.js";


const registerUser = asynchandler(async (req,res) => {
    res.status(200).json({
        message : "postman is working"
    })
})


export {registerUser};