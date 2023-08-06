import express from "express";

import * as controller from '../controller/cityController.js';

export const cityRouter = express.Router();

cityRouter.get('/', controller.getAllCities);
cityRouter.get('/count', controller.getHotelCount);
cityRouter.get('/:id', controller.getOneCity);