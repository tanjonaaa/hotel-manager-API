import express from "express";
//Controller methods import
import * as controller from "../controller/userController.js"

export const userRouter = express.Router();

userRouter.get('/', controller.getAllUsers);

userRouter.get('/:id', controller.getOneUserByItsId);