import express from "express";
//Controller methods import
import {
    getAllUsers
} from "../controller/userController.js"

export const userRouter = express.Router();

userRouter.get('/', getAllUsers);