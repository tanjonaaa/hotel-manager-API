import { pool } from "../../config/connection.js";

export const getAllRoomTypes = async () => {
    const results = await pool.query('SELECT * FROM room_type');

    return results.rows;
}