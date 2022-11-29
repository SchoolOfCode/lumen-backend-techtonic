// A package to connect to the database.
import pkg from 'pg';
// Pool handles the connection between the client and the database.
const {Pool} = pkg;

// Pool using our URL to database to connect.
const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL, 
}); 

// Exporting query with a pool connection.
export function query(text, params){
    return pool.query(text, params)
  }

