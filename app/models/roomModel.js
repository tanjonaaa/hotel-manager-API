//Database connection import
import { pool } from "../../config/connection.js";

//Returns a Promise containing all room in specified room id
export const roomById = async (id) => {
    const results = await pool.query(`
    SELECT * FROM room
    WHERE id = ${id};
    `);
    return results.rows;
}
//Returns a Promise containing all room in specified hotels id
export const allRoom = async (id) => {
    const results = await pool.query(`
    SELECT * FROM room
    WHERE id_hotel = ${id};
    `);
    return results.rows;
}

export const allRoomInOneHotel = async (id) => {
    const results = await pool.query(`
        SELECT
          room.* ,
          room_type.name AS room_type_name,
          room_type.base_price + SUM(room_option.price) AS total_price
        FROM
          room
        INNER JOIN
          room_type ON room.id_room_type = room_type.id
        LEFT JOIN
          have_room_option ON room.id = have_room_option.id_room
        LEFT JOIN
          room_option ON have_room_option.id_room_option = room_option.id
        WHERE
          room.id_hotel = ${id}
        GROUP BY
          room.id, room_type.name, room_type.base_price;
    `)
    return results.rows;
}

//Returns a Promise containing all room in specified periode
export const allRoomAvailaible = async (start, end) => {
    const results = await pool.query(`
    SELECT room.*
    FROM (
        SELECT *FROM reservation
            WHERE  '${start}'<=start_time AND start_time<='${end}'
        UNION
        SELECT * FROM reservation
            WHERE  '${start}'<=end_time AND end_time<='${end}'
    ) as indisponibility
        RIGHT JOIN room
        ON room.id = indisponibility.room_id
        WHERE indisponibility.room_id IS NULL;
    `);
    return results.rows;
}



// insert
export const insertRoom = async ({room_type, hotel}) => {
    const results = await pool.query(`
    INSERT INTO room (id_room_type, id_hotel)
    VALUES (
        ${room_type},
        ${hotel}
    );
    `);
    return results.rows
}

//update
export const updateRoom = async ({id, room_type, hotel, description, photo}) => {
    const results = await pool.query(`
    UPDATE room
    SET id_room_type = ${room_type},
            id_hotel = ${hotel},
            description = '${description}',
            photo = '${photo}'
    WHERE id = ${id};
    `);
    return results.rows
}

//delete
export const deleteRoom = async ({id}) => {
    const results = await pool.query(`
    DELETE FROM room
    WHERE id = $1;
    `, [id]);
    return results.rows
}

//search
export const searchRoomByOption = async ({id, name}) => {
    const results = await pool.query(`
    SELECT room.*, room_option.id as room_option_id, room_option.name as room_option_name FROM room_option
      INNER JOIN have_room_option
      ON have_room_option.id_room_option = room_option.id
      INNER JOIN room
      ON have_room_option.id_room = room.id
      WHERE room_option.id = 1 OR room_option.name ILIKE '%m%';
    `, [id, name]);
    return results.rows
}