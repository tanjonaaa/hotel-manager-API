import express from "express";
//Controller methods import
import {
    getAllHotels, getAllHotelsByDescription, getOneHotelByItsId, getallHotelsByDescription
} from "../controller/hotelController.js";

export const hotelRouter = express.Router();

hotelRouter.get('/', (req, res) => getAllHotels(req, res));

hotelRouter.get('/:id', (req, res) => getOneHotelByItsId(req, res));

hotelRouter.get('/:description', (req, res) => getAllHotelsByDescription(req, res));