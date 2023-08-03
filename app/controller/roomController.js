//Model methods imports
import { allRoom, roomById } from "../models/roomModel.js"

export const getAllRoom = (req,res)=>{
    allRoom(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}

export const getRoomById = (req,res)=>{
    roomById(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}
