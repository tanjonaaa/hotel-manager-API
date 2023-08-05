//Database connection import
import { pool } from "../../config/connection.js";

// insert
export const insertReservation = async ({id,
    creation_timestamp,
    user_id,
    handler_id,
    room_id,
    conference_room_id,
    start_time,
    end_time,
    special_requests,
    payment_method,
    is_paid,
    is_cancelled,
    penalty_rate}) => {
    const result = await pool.query(`
    INSERT INTO room (id_room_type, id_hotel)
    VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13}
    );
    `, [id,
        creation_timestamp,
        user_id,
        handler_id,
        room_id,
        conference_room_id,
        start_time,
        end_time,
        special_requests,
        payment_method,
        is_paid,
        is_cancelled,
        penalty_rate]);
    return results.rows
}