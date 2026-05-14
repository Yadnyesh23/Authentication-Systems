import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());

// Routes
import healthcheckRoute from "./modules/healthcheck/healthcheck.route.js";
import registerRoute from './modules/register/register.route.js';
import loginRoute from './modules/login/login.route.js'

app.use("/api/v1", healthcheckRoute);
app.use("/api/v1/auth",registerRoute);
app.use("/api/v1/auth",loginRoute);

const startServer = async () => {
    let connection;

    try {
        connection = await pool.getConnection();
        console.log("MySQL connected successfully.");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error.message);

    } finally {
        if (connection) connection.release();
    }
};

startServer();