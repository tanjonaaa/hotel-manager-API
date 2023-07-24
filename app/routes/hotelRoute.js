import express from "express";
//Controller methods import
import {
    getAllHotels, getOneHotelByItsId, getAllHotelsOrderByRate
} from "../controller/hotelController.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', getAllHotels);

hotelRouter.get('/:id', getOneHotelByItsId);

hotelRouter .get("/rate", getAllHotelsOrderByRate);