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

//Returns a Promise containing the liste of hotels order by rate
export const orderByRate = async () => {
    const results = await pool.query(`
        SELECT hotel.*, AVG(rate) as total_rate FROM hotel
            INNER JOIN rating
            ON rating.id_hotel = hotel.id
            GROUP BY hotel.id
            ORDER BY total_rate DESC;
    `);
    return results.rows;
}


export const AllCity = async () => {
    const results = await pool.query(`
        SELECT h.*, c.name AS city_name
        FROM hotel h
        INNER JOIN city c ON h.id_city = c.id
        GROUP BY  c.name,h.id
    `);
    return results.rows;
}

export const updateHotel = async ({ id, name, address, is_active, id_city }) => {
    const result = await pool.query(`
        UPDATE hotel
        SET name = $1,
            address = $2,
            is_active = $3,
            id_city = $4
        WHERE id = $5;
    `, [name, address, is_active, id_city, id]);

    return result.rows;
};
