//Database connection import
import {pool} from "../../config/connection.js";

//Returns a Promise containing our hotels
export const allHotels = async () => {
    const results = await pool.query('SELECT * FROM hotel');
    return results.rows;
}

//Returns a Promise containing the single hotel got by its id
export const oneById = async (id) => {
    const results = await pool.query('SELECT * FROM hotel WHERE id = $1', [id]);
    return results.rows;
}