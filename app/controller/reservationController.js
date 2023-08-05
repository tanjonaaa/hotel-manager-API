//Model methods imports
import * as model from "../models/reservationModel.js"

export const insertReservation = (req,res)=>{
    model.insertReservation(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}