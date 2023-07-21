import express from "express";
export const hotelRouter = express.Router();
import {selectAllHotels} from "../../config/connection.js"

hotelRouter.get('/', (req, res) => selectAllHotels(req, res));
