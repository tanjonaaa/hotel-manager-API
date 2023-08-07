import express from "express";
//Controller methods import
import * as controller from "../controller/roomController.js";

export const roomRouter = express.Router();

roomRouter.post('/insert', controller.insertRoom);
roomRouter.put('/update', controller.updateRoom);
roomRouter.delete('/delete', controller.deleteRoom);

roomRouter.get('/hotel/:id', controller.getAllRoom);
roomRouter.get('/:id', controller.getRoomById);
roomRouter.get('/group_by_hotel/:id',controller.getallRoomInOneHotel);