//Database connection import
import {pool} from "../../config/connection.js";

//Returns a Promise containing all Users
export const allUsers = async () =>{
    const results = await pool.query('SELECT * FROM "user"');
    return results.rows;
}