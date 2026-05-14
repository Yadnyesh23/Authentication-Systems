import express from 'express';
import dotenv from 'dotenv';
import pool from './db/index.js'

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


const startServer = async() => {
    try {
        const connection = await pool.getConnection();
        console.log("MySQL connected succesfully.");
        connection.release();

        // server
        app.listen(port , () => {
        console.log(`Server listening on port http://localhost:${port}`)
        });
        
    } catch (error) {
        console.log("MySQL Connection Failed");
        console.log(error.message);
    }
}

startServer();