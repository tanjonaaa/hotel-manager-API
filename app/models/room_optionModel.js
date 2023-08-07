//Database connection import
import { pool } from "../../config/connection.js";

export const AllRoomOptions = async() => {
    const results = await pool.query('SELECT * FROM room_option');
    return results.rows;
}

export const allOptionsOfARoom = async (id) => {
    const results = await pool.query(`
        SELECT r_o.name FROM room r
        LEFT JOIN have_room_option h_r_o ON r.id = h_r_o.id_room
        INNER JOIN room_option as r_o ON r_o.id = h_r_o.id_room_option
        WHERE r.id = $1
    `, [id]);

    return results.rows;
}