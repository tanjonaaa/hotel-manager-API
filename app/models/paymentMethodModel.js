//Database connection import
import {pool} from "../../config/connection.js";

//Returns a Promise containing all payment method
export const allPaymentMethod = async () =>{
    const results = await pool.query('SELECT * FROM reservation;');
    return results.rows;
}

//Returns a Promise containing the single payment method by its id
export const onePaymentMethodById = async (id) => {
    const results = await pool.query('SELECT * FROM reservation WHERE id = $1;', [id]);
    return results.rows;
}