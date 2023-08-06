import {pool} from '../../config/connection.js';

export const allCities = async () => {
    const results = await pool.query('SELECT * FROM city');

    return results.rows;
}

export const oneCity = async (id) => {
    const result = await pool.query(`SELECT * FROM city WHERE id = $1`, [id]);

    return result.rows;
}

export const countHotels = async () => {
    const results = await pool.query(`
        SELECT c.*, 
        (
            SELECT COUNT(*) FROM hotel WHERE id_city = c.id GROUP BY id_city, c.id
        ) as hotel_count
        FROM city c ORDER BY hotel_count DESC LIMIT 3
    `);

    return results.rows;
}