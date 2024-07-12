import pool from "@/pages/utils/database";

export default async function inquiry(req, resp) {
    if (req.method === 'POST') {
        console.log(req.body);

        /*
            TODO : 서버단 validate
        */

        let conn;
        try {
            conn = await pool.getConnection();
            // const data = await conn.
        } catch (e) {
            console.log(e);
        } finally {
            conn.release();
        }


    } else {
        return resp.status(400).json('405 Method Not Allowed');
    }
}