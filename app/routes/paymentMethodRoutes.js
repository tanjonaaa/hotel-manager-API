import express from "express";
//Controller methods import
import * as controller from "../controller/paymentMethodController.js"

export const userRouter = express.Router();

userRouter.get('/', controller.getAllPaymentMethod);

userRouter.get('/:id', controller.getOnePaymentMethodByItsId);