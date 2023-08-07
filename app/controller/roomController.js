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

export const getAllUnservedRoom = (req,res) => {
    const id = req.params.id;
    const start = req.query.start;
    const end = req.query.end;


    model.AllRoomUnserved(id ,start ,end).then((results)=>{
        res.status(200).json(results); 
    }).catch((e) => {
        res.status(500);
        throw e
    });
}

export const insertRoom = (req,res)=>{
    model.insertRoom(req.body).then((results)=>
        res.status(200).json(results)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const updateRoom = (req,res)=>{
    model.updateRoom(req.body).then((results)=>
        res.status(200).json(results)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const deleteRoom = (req,res)=>{
    model.deleteRoom(req.body).then((results)=>
        res.status(200).json(results)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const searchRoomByOption = (req,res)=>{
    model.searchRoomByOption(req.body).then((results)=>
        res.status(200).json(results)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}
