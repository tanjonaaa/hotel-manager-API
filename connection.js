// import postgres package
import pkg from "pg";
const { Pool } = pkg;

// import "variable d'environement"
import { config } from "dotenv";
config();

// Connection to database
const pool = new Pool(process.env.db);
