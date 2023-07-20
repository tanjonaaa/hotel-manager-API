import express from "express";
export const hotelRouter = express.Router();

hotelRouter.get('/', (req, res) => {
    res.status(200).send({"axel" : "test"});
    console.log("test other");
})
