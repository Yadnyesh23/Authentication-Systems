import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const startServer = async() => {
    try {
        app.listen(PORT, ()=> {
            console.log(`Server listening on port : http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("Error :- ", error.message);
    }
}

startServer();