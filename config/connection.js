// import postgres package
import { Pool } from "pg";

// import "variable d'environement"
import { config } from "dotenv";
config();

// Connection to database
const pool = new Pool(process.env.db);

// All psql command
export const selectAllHotels = (request, response) => {
    pool.query('SELECT * FROM hotel;', (err, result)=>{
        if (err) 
            throw err;
        response.send(result);
    })
};
