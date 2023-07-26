import express from "express";
//Controller methods import
import {
    getAllHotels, getOneHotelByItsId, getAllHotelsOrderByRate
} from "../controller/hotelController.js";

// import middelWare
import {
    avgFloatToInt
} from "../middelware/hotelMiddelWare.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', getAllHotels);

hotelRouter .get("/rate", avgFloatToInt, getAllHotelsOrderByRate);

hotelRouter.get('/:id', getOneHotelByItsId);