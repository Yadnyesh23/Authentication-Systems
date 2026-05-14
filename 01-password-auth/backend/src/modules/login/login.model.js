import pool from "../../config/db.js";

const getUserByEmail = async (email) => {
    const [rows] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    return rows[0];
};

export default { getUserByEmail };