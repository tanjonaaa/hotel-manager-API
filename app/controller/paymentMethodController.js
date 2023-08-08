//Model methods imports
import * as model from "../models/paymentMethodModel.js"

export const getAllPaymentMethod = (req,res)=>{
    model.allPaymentMethod().then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    });
}

export const getOnePaymentMethodByItsId = (req, res) => {
    model.onePaymentMethodById(req.params.id).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

