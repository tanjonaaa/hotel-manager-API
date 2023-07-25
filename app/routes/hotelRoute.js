import express from "express";
//Controller methods import
import {
    getAllHotels, getOneHotelByItsId, getAllHotelsOrderByRate
} from "../controller/hotelController.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', getAllHotels);

hotelRouter.get('/hotel-by-city-ranking', (req, res) => getAllCity(req, res)); 

hotelRouter .get("/rate", getAllHotelsOrderByRate);

hotelRouter.get('/:id', getOneHotelByItsId);