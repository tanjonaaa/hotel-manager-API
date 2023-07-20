//Imports
import express from "express";
import {hotelRouter} from "./app/routes/hotelRoute.js";
import cors from "cors";

//Variable declaration
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routers
app.use('/hotels', hotelRouter);


// port listen
app.listen(process.env.expressPORT || 3000, ()=>{
    console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});