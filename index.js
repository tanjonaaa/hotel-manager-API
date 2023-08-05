//Imports
import express from "express";
import {hotelRouter} from "./app/routes/hotelRoute.js";
import { userRouter } from "./app/routes/userRoutes.js";
import { roomRouter } from "./app/routes/roomRoute.js";
import cors from "cors";


//Variable declaration
export const app = express();

//Middlewares
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('public'));

//Routers : hotel
app.use('/hotels', hotelRouter);

//Routers : User
app.use('/users', userRouter)

//Routers : room
app.use('/room', roomRouter)


// port listen
app.listen(process.env.expressPORT || 3000, ()=>{
    console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});