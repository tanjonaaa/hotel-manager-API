import express from "express";
//Controller methods import
import * as controller from "../controller/hotelController.js";

// import middelWare
import {
    avgFloatToInt
} from "../middelware/hotelMiddelWare.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', controller.getAllHotels);
hotelRouter.get('/count/:id_hotel', controller.getCountOfHotelInCity);

hotelRouter.get('/hotel-by-city-ranking', controller.getAllCity); 

hotelRouter .get("/rate", avgFloatToInt, controller.getAllHotelsOrderByRate);

hotelRouter.put('/update/:id', controller.updateOneHotel);

hotelRouter.get('/:id', controller.getOneHotelByItsId);