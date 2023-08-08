//Database connection import
import { pool } from "../../config/connection.js";

// insert
export const insertReservation = async ({id,
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
    INSERT INTO reservation (id,
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
        penalty_rate
    ) VALUES (
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
        $12,}
    );
    `, [id,
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
    return result.rows
}

export const oneReservations = async (id) => {
    const results = await pool.query('SELECT * FROM reservation WHERE id = $1', [id]);
    return results.rows;
}