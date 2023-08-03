//Model methods imports
import * as model from "../models/roomModel.js"

export const getAllRoom = (req,res)=>{
    model.allRoom(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}

export const getRoomById = (req,res)=>{
    model.roomById(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}
