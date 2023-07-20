// import postgres package
import pkg from "pg";
const { Pool } = pkg;

// import "variable d'environement"
import { config } from "dotenv";
config();

// Connection to database
const pool = new Pool(process.env.db);

// All psql command
export const selectAllHotels = (request, response) => {
    pool.query('SELECT * FROM hotel;')
};
