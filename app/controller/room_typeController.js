import * as model from '../models/room_typeModel.js';

export const getAllRoomTypes = (req, res) => {
    model.getAllRoomTypes().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500).json({ error: "Failed to fetch all room types." });
    });
}