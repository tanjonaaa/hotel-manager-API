import express from "express";
//Controller methods import
import * as controller from "../controller/reservationController.js";

export const reservationRouter = express.Router();

reservationRouter.post('/insert', controller.insertReservation);