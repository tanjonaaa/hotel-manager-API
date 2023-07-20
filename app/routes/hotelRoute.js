import pkg from "express";
const express = pkg;
export const hotelRouter = express.Router();

hotelRouter.get('/', (req, res) => {
    res.sendStatus(200);
    res.end('Route to get all hotels');
})
