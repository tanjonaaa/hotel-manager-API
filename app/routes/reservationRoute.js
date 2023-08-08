import express from "express";
//Controller methods import
import * as controller from "../controller/reservationController.js";

export const reservationRouter = express.Router();

reservationRouter.get('/:id',controller.getOneReservations);

reservationRouter.post('/insert', controller.insertReservation);

reservationRouter.get('/reservationAvailable/:id?start_date=:start&end_date=:end');


