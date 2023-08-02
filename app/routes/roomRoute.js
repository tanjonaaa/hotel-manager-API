import express from "express";
//Controller methods import
import { getAllRoom } from "../controller/roomController.js";

export const roomRouter = express.Router();

roomRouter.get('/:id', getAllRoom);