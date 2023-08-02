//Model methods imports
import {
    allUsers,oneUserById
} from "../models/userModel.js"

export const getAllUsers = (req,res)=>{
    allUsers().then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500).json({ error: "Failed to fetch AllCity." });
    });
}

export const getOneUserByItsId = (req, res) => {
    oneUserById(req.params.id).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500).json({ error: "Failed to fetch AllCity." });
    })
}

