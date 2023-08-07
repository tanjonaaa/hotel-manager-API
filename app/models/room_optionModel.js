//Database connection import
import { pool } from "../../config/connection.js";

export const AllRoomOptions = async() => {
    const results = await pool.query('SELECT * FROM room_option');
    return results.rows;
}