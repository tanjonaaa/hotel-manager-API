import express from "express";
//Controller methods import
import * as controller from "../controller/room_typeController.js";

export const room_typeRouter = express.Router();

room_typeRouter.get('/',controller.getAllRoomTypes);