//Database connection import
import { pool } from "../../config/connection.js";

//Returns a Promise containing all room in specified hotels id
export const allRoom = async (id) => {
    const results = await pool.query(`
    SELECT * FROM room
    WHERE id_hotel = ${id};
    `);
    return results.rows;
}
