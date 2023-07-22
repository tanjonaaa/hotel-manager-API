//Model methods imports
import {
    allHotels, oneById, allHotelsByDescription
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

export const getAllHotelsByDescription = (req, res) => {
    allHotelsByDescription(req.params.description).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500)
    })
}