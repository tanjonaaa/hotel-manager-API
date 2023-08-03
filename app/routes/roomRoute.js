import express from "express";
//Controller methods import
import * as controller from "../controller/roomController.js";

export const roomRouter = express.Router();

roomRouter.get('/hotel/:id', controller.getAllRoom);
roomRouter.get('/:id', controller.getRoomById);