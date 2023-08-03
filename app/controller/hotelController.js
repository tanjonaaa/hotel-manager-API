//Model methods imports
import * as model from "../models/hotelModel.js";

export const getAllHotels = (req, res) => {
    model.allHotels().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

export const getOneHotelByItsId = (req, res) => {
    model.oneById(req.params.id).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

export const getAllHotelsOrderByRate = (req, res) => {
    model.orderByRate().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
};


export const getAllCity = (req, res) => {
    model.AllCity().then((results) => {
       res.status(200).json(results);
   }).catch((e) => {
       res.status(500).json({ error: "Failed to fetch AllCity." });
   });
}