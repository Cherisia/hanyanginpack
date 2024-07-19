import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 20,
    maxIdle: 20,
});

const executeQuery = async (query, params) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const [result, fields] = await conn.execute(query, params);
        return [result, fields];
    } catch (e) {
        console.log("Error in executeQuery : " + e);
        throw e;
    } finally {
        if (conn) conn.release();
    }
}

module.exports = {executeQuery};
