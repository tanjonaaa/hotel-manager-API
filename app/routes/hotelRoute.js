import express from "express";
export const hotelRouter = express.Router();
import conn from "../../config/connection.js"

hotelRouter.get('/', (req, res) => conn.selectAllHotels)
