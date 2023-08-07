import {allCities, countHotels, oneCity} from "../models/cityModel.js";

export const getAllCities = (req, res) => {
    allCities().then(results => {
        res.status(200).json(results);
    }).catch(e => { res.status(500).json({"error": "Couldn't fetch cities"}) })
}

export const getOneCity = (req, res) => {
    oneCity(req.params.id).then(result => {
        res.status(200).json(result);
    }).catch(e => { res.status(500).json({"error": "Couldn't fetch cities"}) })
}

export const getHotelCount = (req, res) => {
    countHotels().then(result => {
        res.status(200).json(result);
    }).catch(e => { res.status(500).json({"error": "Couldn't fetch cities"}) })
}

