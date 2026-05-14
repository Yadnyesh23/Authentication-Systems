import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        const connection = await pool.getConnection();

        console.log("MySQL connected successfully.");

        connection.release();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

startServer();