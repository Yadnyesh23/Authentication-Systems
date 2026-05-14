import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db.js';

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());

// Routes
import healthcheckRoute from './modules/healthcheck/healthcheck.route.js'

app.use('/api/v1', healthcheckRoute)

const startServer = async( ) => {
    let connection;
    
    try {
        const connection = await pool.getConnection();
        console.log("MySQL connected successfully.");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error.message);
    } finally {
        if (connection) connection.release();
    }
}

startServer();