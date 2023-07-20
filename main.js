// importation of connection to db
import { selectAllHotels } from "./connection.js";

// initialisation of express
import pkg from "express";
const express = pkg;
const app = express();

// port listen
app.listen(process.env.expressPORT || 3000, ()=>{
    console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});


// utile for a express app
app.use(express.json());
