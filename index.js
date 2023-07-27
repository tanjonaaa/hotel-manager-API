//Imports
import express from "express";
import {hotelRouter} from "./app/routes/hotelRoute.js";
import { userRouter } from "./app/routes/userRoutes.js";
import cors from "cors";


//Variable declaration
export const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routers : hotel
app.use('/hotels', hotelRouter);

//Routers : User
app.use('/Users', userRouter)


// port listen
app.listen(process.env.expressPORT || 3000, ()=>{
    console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});