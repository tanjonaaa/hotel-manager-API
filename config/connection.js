// import postgres package
import pkg from "pg";

// import "variable d'environement"
import { config } from "dotenv";
config();

const {Pool} = pkg;

// Connection to database
const pool = new Pool({
        user : process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT
});

// All psql command
export const selectAllHotels = (request, response) => {
    pool.query('SELECT * FROM hotel', (err, result)=>{
        if (err) 
            throw err;
        response.send(result.rows);
    })
};
