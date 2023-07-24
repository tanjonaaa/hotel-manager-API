import express from "express";
//Controller methods import
import {
    getAllHotels, getOneHotelByItsId, getAllHotelsOrderByRate
} from "../controller/hotelController.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', (req, res) => getAllHotels(req, res));

hotelRouter.get('/:id', (req, res) => getOneHotelByItsId(req, res));

hotelRouter .get("/rate", (req, res) => getAllHotelsOrderByRate(req,res))