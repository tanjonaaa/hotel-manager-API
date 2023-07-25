import express from "express";
//Controller methods import
import {
    getAllHotels, getOneHotelByItsId, getAllHotelsOrderByRate , getAllCity
} from "../controller/hotelController.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', getAllHotels);

hotelRouter.get('/hotel-by-city-ranking', getAllCity); 

hotelRouter .get("/rate", getAllHotelsOrderByRate);

hotelRouter.get('/:id', getOneHotelByItsId);