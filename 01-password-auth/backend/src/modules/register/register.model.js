import pool from "../../config/db.js";

// check user exists
const checkUserExist = async (email) => {
    const [rows] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    return rows[0];
};

// create user
const createUser = async (username, email, password) => {
    const [result] = await pool.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
    );

    return {
        id: result.insertId,
        username,
        email
    };
};

export default {
    checkUserExist,
    createUser
};