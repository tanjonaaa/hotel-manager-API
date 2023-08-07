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

export const getallRoomInOneHotel = (req,res) => {
    model.allRoomInOneHotel(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}

export const insertRoom = (req,res)=>{
    model.insertRoom(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const updateRoom = (req,res)=>{
    model.updateRoom(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const deleteRoom = (req,res)=>{
    model.deleteRoom(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const searchRoomByOption = (req,res)=>{
    model.searchRoomByOption(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}
