//Model methods imports
import {
    allHotels, oneById, orderByRate , AllCity 
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

export const getAllHotelsOrderByRate = (req, res) => {
    orderByRate().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
};


export const getAllCity = (req, res) => {
    AllCity().then((results) => {
       res.status(200).json(results);
   }).catch((e) => {
       res.status(500).json({ error: "Failed to fetch AllCity." });
   });
}