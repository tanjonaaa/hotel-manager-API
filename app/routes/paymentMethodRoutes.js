import express from "express";
//Controller methods import
import * as controller from "../controller/paymentMethodController.js"

export const paymentMethodRouter = express.Router();

paymentMethodRouter.get('/', controller.getAllPaymentMethod);

paymentMethodRouter.get('/:id', controller.getOnePaymentMethodByItsId);