//Database connection import
import {pool} from "../../config/connection.js";

//Returns a Promise containing all Users
export const allUsers = async () =>{
    const results = await pool.query('SELECT * FROM "user"');
    return results.rows;
}

//Returns a Promise containing the single hotel got by its id
export const oneUserById = async (id) => {
    const results = await pool.query('SELECT * FROM "user" WHERE id = $1', [id]);
    return results.rows;
}