import * as model from "../models/room_optionModel.js"

export const getAllRoomOptions = (req, res) => {
    model.AllRoomOptions().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500).json({ error: "Failed to fetch AllRoomoptions." });
    });
}
