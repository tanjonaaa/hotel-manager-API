import express from "express";
//Controller methods import
import { getAllRoom, getRoomById } from "../controller/roomController.js";

export const roomRouter = express.Router();

roomRouter.get('/hotel/:id', getAllRoom);
roomRouter.get('/:id', getRoomById);