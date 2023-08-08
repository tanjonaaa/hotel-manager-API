//Imports
import express from "express";
import { hotelRouter } from "./app/routes/hotelRoute.js";
import { userRouter } from "./app/routes/userRoutes.js";
import { roomRouter } from "./app/routes/roomRoute.js";
import { reservationRouter } from "./app/routes/reservationRoute.js";
import cors from "cors";
import {cityRouter} from "./app/routes/cityRoute.js";
import { room_optionRouter } from "./app/routes/room_optionRoute.js";
import { room_typeRouter } from "./app/routes/room_typeRoute.js";


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

//Routers : reservation
app.use('/reservation', reservationRouter)

//Routers : cities
app.use('/city', cityRouter)

//Routers : room_option
app.use('/room_option' , room_optionRouter);

//Routers : room_option
app.use('/room_type' , room_typeRouter);


// port listen
app.listen(process.env.expressPORT || 3000, ()=>{
    console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});