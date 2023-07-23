//Model methods imports
import {
    allHotels, oneById
} from "../models/hotelModel.js";

export const getAllHotels = (req, res) => {
    allHotels().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

export const getOneHotelByItsId = (req, res) => {
    oneById(req.params.id).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}