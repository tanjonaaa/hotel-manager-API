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

//Returns a Promise containing a liste of hotels by "un mot clé" in description
export const allHotelsByDescription = async (description) => {
    const results = await pool.query(`
    SELECT DISTINCT hotel.name AS nom_hotel
    FROM hotel
    JOIN room ON hotel.id = room.id_hotel
    WHERE room.description ILIKE '$1';
    `, [description]);
    return results.rows;
}