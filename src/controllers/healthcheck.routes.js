import { asynchandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Tweet } from "../models/tweet.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";

const healthcheck = asynchandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, { message: "Everything is O.K" }, "Ok"));
});

export { healthcheck };